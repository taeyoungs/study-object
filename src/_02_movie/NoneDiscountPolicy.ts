import { DiscountPolicy } from './DiscountPolicy';
import { Money } from './Money';
import { Screening } from './Screening';

export class NoneDiscountPolicy implements DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money {
    return Money.ZERO;
  }
}
