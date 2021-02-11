import { ThemeState } from 'styles/theme/slice/types';
import { DnsLookupFormState } from 'app/components/DnsLookupForm/slice/types';

export interface RootState {
  theme?: ThemeState;
  dnsLookupForm?: DnsLookupFormState;
}
