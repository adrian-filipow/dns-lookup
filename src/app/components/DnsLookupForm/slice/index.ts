import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Saga } from './saga';
import { DnsLookupFormState } from './types';

/**
 * Import DnsResponse interface
 */
import { DnsResponse } from './types';

export const initialState: DnsLookupFormState = {
  domainName: 'example.com',
};

const slice = createSlice({
  name: 'dnsLookupForm',
  initialState,
  reducers: {
    changeDomainName(state, action: PayloadAction<string>) {
      state.domainName = action.payload;
    },
    changeDnsResults(state, action: PayloadAction<DnsResponse>) {
      state.dnsResults = action.payload;
    },
  },
});

export const { actions: Actions } = slice;

export const useDnsLookupFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: Saga });
  return { actions: slice.actions };
};
