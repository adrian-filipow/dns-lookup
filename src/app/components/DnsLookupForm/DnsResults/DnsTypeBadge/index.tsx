/**
 *
 * DnsTypeBadge
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

/**
 * Bootstrap imports
 */
import Badge from 'react-bootstrap/Badge';

interface Props {
  result: string;
}

export function DnsTypeBadge(props: Props) {
  return (
    <Badge pill variant="info">
      <ResultType>{props.result}</ResultType>
    </Badge>
  );
}

const ResultType = styled.div`
  font-size: 12px;
  font-weight: 300;
  padding: 2px 7px;
`;
