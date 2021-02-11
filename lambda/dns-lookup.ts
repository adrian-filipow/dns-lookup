const dns = require('dns');

// public google dns server
dns.setServers(['8.8.8.8']);

// grouping lookup types depending on return structure
const groupSingle = ['A', 'AAAA', 'CNAME', 'NS', 'PTR', 'TXT'];
const groupObjects = ['CAA', 'MX', 'NAPTR', 'SOA', 'SRV'];
const groupAll = [...groupSingle, ...groupObjects, 'ANY'];

class DNSResolver {
  type: string;
  domainName: string;

  /**
   * Constructor
   * @param type - Type of the DNS lookup
   * @param domainName - Domain name for the lookup
   */
  constructor(type: string, domainName: string) {
    this.type = type;
    this.domainName = domainName;
  }

  /**
   * Create DNS lookup
   */
  async createLookupResolve() {
    return new Promise((resolve, reject) => {
      dns.resolve(
        this.domainName,
        this.type,
        (err: object, records: any[] | object) => {
          if (err) reject(err);
          resolve(records);
        },
      );
    });
  }

  /**
   * Construct api response
   * @param response - The response of the lookup
   */
  async constructAPIResponse(response: any) {
    const refinedResponse = {
      DNSData: {
        domainName: this.domainName,
        recordAmount: response.length,
        types: [],
        lookupDate: new Date(),
        dnsRecords: [],
      },
    };
    // Response group: array of strings & array with array of strings
    if (groupSingle.includes(this.type)) {
      for (let i = 0; i < response.length; i++) {
        const item = response[i];
        if (this.type === 'TXT') {
          refinedResponse.DNSData.dnsRecords.push({
            type: this.type,
            value: item[0],
          });
        } else {
          refinedResponse.DNSData.dnsRecords.push({
            type: this.type,
            value: item,
          });
        }
        if (!refinedResponse.DNSData.types.includes(this.type)) {
          refinedResponse.DNSData.types.push(this.type);
        }
      }
      return refinedResponse;
    }
    // Response group: array of objects
    if (this.type === 'ANY') {
      for (let i = 0; i < response.length; i++) {
        const item = response[i];
        refinedResponse.DNSData.dnsRecords.push({ value: item });
        if (!refinedResponse.DNSData.types.includes(item.type)) {
          refinedResponse.DNSData.types.push(item.type);
        }
      }
      return refinedResponse;
    }
    // Response group: object
    if (groupObjects.includes(this.type)) {
      refinedResponse.DNSData.dnsRecords.push({
        type: this.type,
        value: response,
      });
      refinedResponse.DNSData.types.push(this.type);
      return refinedResponse;
    }
  }
}

exports.handler = async function (event, context, callback) {
  const query = event.queryStringParameters;

  let type = query.type;
  let domainName = query.domainName;

  // set default type
  if (!type) {
    type = 'ANY';
  }

  // check if type is valid
  if (!groupAll.includes(type)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Invalid type. You don't have to specify a type. If you want to specify a type please use a valid type like: ${groupAll}`,
      }),
    };
  }

  // check if domain is provided
  if (!domainName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Domain name is required.' }),
    };
  }

  try {
    // create object
    const resolver = new DNSResolver(type, domainName);

    // get records
    const records = await resolver.createLookupResolve();

    // construct api response
    const response = await resolver.constructAPIResponse(records);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    function DomainException(message) {
      this.message = message;
      this.name = 'DomainException';
    }
    throw new DomainException('Network error');
  }
};
