/**
 *
 * Asynchronously loads the component for DnsRecord
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DnsRecord = lazyLoad(
  () => import('./index'),
  module => module.DnsRecord,
);
