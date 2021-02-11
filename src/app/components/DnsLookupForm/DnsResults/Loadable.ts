/**
 *
 * Asynchronously loads the component for DnsResults
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DnsResults = lazyLoad(
  () => import('./index'),
  module => module.DnsResults,
);
