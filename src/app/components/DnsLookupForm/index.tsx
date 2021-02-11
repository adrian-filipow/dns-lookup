/**
 *
 * DnsLookupForm
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

/**
 * Bootstrap imports
 */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

/**
 * Import slice
 */
import { useSelector, useDispatch } from 'react-redux';
import { useDnsLookupFormSlice } from './slice';
import { selectDomainName } from './slice/selectors';

import axios from 'axios';
import Joi from 'joi';

interface Props {}

export function DnsLookupForm(props: Props) {
  /**
   * Slice actions
   */
  const { actions } = useDnsLookupFormSlice();
  const dispatch = useDispatch();

  const domainName = useSelector(selectDomainName);

  const changeDomainName = (evt: any) => {
    dispatch(actions.changeDomainName(evt.target.value));
  };

  const changeDnsResults = (value: any) => {
    dispatch(actions.changeDnsResults(value));
  };

  return (
    <DnsLookupFormWrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          try {
            Joi.attempt(domainName, Joi.string().domain());
            axios
              .get(`/api/dns-lookup?type=ANY&domainName=${domainName}`)
              .then(function (response) {
                changeDnsResults(response.data);
              })
              .catch(function (error) {
                alert(error);
              });
          } catch (err) {
            alert(err.toString());
          }
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="domainName">
            <InputWrapper>
              <Form.Label htmlFor="domainName" srOnly>
                Domain name for DNS lookup
              </Form.Label>
              <Form.Control
                id="domainName"
                placeholder="Domain name"
                value={domainName}
                onChange={changeDomainName}
              />
            </InputWrapper>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <ButtonWrapper>
              <Button type="submit" variant="primary">
                Lookup
              </Button>
            </ButtonWrapper>
          </Form.Group>
        </Form.Row>
      </Form>
    </DnsLookupFormWrapper>
  );
}

const DnsLookupFormWrapper = styled.div``;

const InputWrapper = styled.div``;

const ButtonWrapper = styled.div``;
