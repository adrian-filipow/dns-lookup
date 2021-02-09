/**
 *
 * HomePage
 *
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {}

export function HomePage(props: Props) {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
    </>
  );
}
