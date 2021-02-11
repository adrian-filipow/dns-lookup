import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

/**
 * Use state or initial state if state not defined
 */
const slice = (state: RootState) => state.dnsLookupForm || initialState;

/**
 * Select whole slice
 */
export const selectSlice = createSelector([slice], state => state);

/**
 * Select domain name
 */
export const selectDomainName = createSelector(
  [slice],
  state => state.domainName,
);

/**
 * Select dns result
 */
export const selectDNSResult = createSelector(
  [slice],
  state => state.dnsResults,
);
