/**
 *
 * Navigation
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

/**
 * Bootstrap imports
 */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {}

export function Navigation(props: Props) {
  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>DNS Lookup</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                target="_blank"
                href="https://github.com/adrian-filipow/dns-lookup"
              >
                Github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div``;
