/**
 *
 * DnsRecord
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { DnsTypeBadge } from '../DnsTypeBadge';

import Col from 'react-bootstrap/Col';

interface Props {
  value: {
    type: string;
    address?: string;
    ttl?: number;
    entries?: string[];
    exchange?: string;
    priority?: number;
    value?: string;
    nsname?: string;
    hostmaster?: string;
    serial?: number;
    refresh?: number;
    retry?: number;
    expire?: number;
    minttl?: number;
    critical?: number;
    issue?: number;
  };
}

export function DnsRecord(props: Props) {
  function handleTime(seconds: number) {
    if (seconds > 86400) {
      return `${(seconds / 86400).toFixed(0)} days`;
    }
    if (seconds > 3600) {
      return `${(seconds / 3600).toFixed(0)} hours`;
    }
    if (seconds > 60) {
      return `${(seconds / 60).toFixed(0)} minutes`;
    }
    return `${seconds} seconds`;
  }

  return (
    <Col lg={12}>
      <DnsRecordWrapper>
        <DnsTypeBadgeWrapper>
          <DnsTypeBadge result={props.value.type} />
        </DnsTypeBadgeWrapper>
        {props.value.address && (
          <RecordValue>Address: {props.value.address}</RecordValue>
        )}
        {props.value.ttl && (
          <RecordValue>
            TTL: {props.value.ttl} seconds ≈ {handleTime(props.value.ttl)}
          </RecordValue>
        )}
        {props.value.entries && (
          <RecordValue>Entry: {props.value.entries}</RecordValue>
        )}
        {props.value.exchange && (
          <RecordValue> Exchange: {props.value.exchange}</RecordValue>
        )}
        {props.value.priority && (
          <RecordValue>Priority: {props.value.priority}</RecordValue>
        )}
        {props.value.value && (
          <RecordValue>Value: {props.value.value}</RecordValue>
        )}
        {props.value.nsname && (
          <RecordValue> Nameserver: {props.value.nsname}</RecordValue>
        )}
        {props.value.hostmaster && (
          <RecordValue>Hostmaster: {props.value.hostmaster}</RecordValue>
        )}
        {props.value.serial && (
          <RecordValue>Serial: {props.value.serial}</RecordValue>
        )}
        {props.value.refresh && (
          <RecordValue>
            Refresh: {props.value.refresh} seconds ≈{' '}
            {handleTime(props.value.refresh)}
          </RecordValue>
        )}
        {props.value.retry && (
          <RecordValue>
            Retry: {props.value.retry} seconds ≈ {handleTime(props.value.retry)}
          </RecordValue>
        )}
        {props.value.expire && (
          <RecordValue>
            Expire: {props.value.expire} seconds ≈{' '}
            {handleTime(props.value.expire)}
          </RecordValue>
        )}
        {props.value.minttl && (
          <RecordValue>
            Min TTL: {props.value.minttl} seconds ≈{' '}
            {handleTime(props.value.minttl)}
          </RecordValue>
        )}
        {props.value.critical && (
          <RecordValue>Critical: {props.value.critical}</RecordValue>
        )}
        {props.value.issue && (
          <RecordValue>Issue: {props.value.issue}</RecordValue>
        )}
      </DnsRecordWrapper>
    </Col>
  );
}

const DnsRecordWrapper = styled.div`
  background-color: ${p => p.theme.lightBackColor};
  margin-bottom: ${p => p.theme.itemSpacing}px;
  border-radius: ${p => p.theme.borderRadius}px;
  padding: ${p => p.theme.smallCardSpacing}px;
`;

const DnsTypeBadgeWrapper = styled.div`
  margin-bottom: ${p => p.theme.itemSpacing}px;
`;

const RecordValue = styled.div`
  font-size: 0.9rem;
`;
