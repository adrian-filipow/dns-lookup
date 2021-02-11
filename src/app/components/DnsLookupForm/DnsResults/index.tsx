/**
 *
 * DnsResults
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

/**
 * Import slice
 */
import { useSelector } from 'react-redux';
import { selectDNSResult } from '../slice/selectors';

import { DnsRecord } from './DnsRecord';
import { DnsTypeBadge } from './DnsTypeBadge';

/**
 * Boostrap imports
 */
import Row from 'react-bootstrap/Row';

/**
 * Dateformat
 */
import dateFormat from 'dateformat';

export function DnsResults() {
  const dnsResults = useSelector(selectDNSResult);
  return (
    <DnsResultsWrapper>
      {dnsResults && (
        <>
          <LookupInfoWrapper>
            <ResultTypeWrapper>
              {dnsResults.DNSData.types.map((result, key) => {
                return (
                  <div className="mr-2">
                    <DnsTypeBadge key={key} result={result} />
                  </div>
                );
              })}
            </ResultTypeWrapper>
            <RecordAmount>
              {dnsResults.DNSData.recordAmount} records found on{' '}
              {dateFormat(dnsResults.DNSData.lookupDate, 'dd.mm.yyyy HH:MM:ss')}{' '}
              for {dnsResults.DNSData.domainName}
            </RecordAmount>
          </LookupInfoWrapper>
          <Row className="row align-items-start">
            {dnsResults.DNSData.dnsRecords.map((record: any, key) => {
              return <DnsRecord key={key} value={record.value} />;
            })}
          </Row>
        </>
      )}
    </DnsResultsWrapper>
  );
}

const DnsResultsWrapper = styled.div``;

const LookupInfoWrapper = styled.div`
  margin: 0px 0px ${p => p.theme.devideSpace}px 0px;
`;

const RecordAmount = styled.div`
  margin-top: ${p => p.theme.miniSpacing}px;
  font-size: 0.9rem;
`;

const ResultTypeWrapper = styled.div`
  display: flex;
`;
