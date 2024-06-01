import { Money } from './Money';
import { Screening } from './Screening';

export interface DiscountPolicy {
  calculateDiscountAmount: (screening: Screening) => Money;
}
