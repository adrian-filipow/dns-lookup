/**
 *
 * Asynchronously loads the component for DnsTypeBadge
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DnsTypeBadge = lazyLoad(
  () => import('./index'),
  module => module.DnsTypeBadge,
);
