/**
 *
 * HomePage
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { Navigation } from 'app/components/Navigation';
import { DnsLookupForm } from 'app/components/DnsLookupForm';
import { DnsResults } from 'app/components/DnsLookupForm/DnsResults';

import styled from 'styled-components/macro';

/**
 * Bootstrap imports
 */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {}

export function HomePage(props: Props) {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation />
      <HomePageWrapper>
        <Container>
          <Row>
            <Col>
              <DnsLookupForm />
              <DnsResults />
            </Col>
          </Row>
        </Container>
      </HomePageWrapper>
    </>
  );
}

const HomePageWrapper = styled.div`
  padding: ${p => p.theme.sectionSpacing / 2}px;
`;
