export interface DnsResponse {
  DNSData: {
    domainName: string;
    recordAmount: number;
    types: string[];
    lookupDate: string;
    dnsRecords: object[];
  };
}

/* --- STATE --- */
export interface DnsLookupFormState {
  domainName: string;
  dnsResults?: DnsResponse;
}
