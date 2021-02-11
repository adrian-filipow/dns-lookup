/**
 *
 * Asynchronously loads the component for DnsLookupForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DnsLookupForm = lazyLoad(
  () => import('./index'),
  module => module.DnsLookupForm,
);
