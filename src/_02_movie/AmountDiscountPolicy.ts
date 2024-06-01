import { DiscountCondition } from './DiscountCondition';
import { DiscountPolicy } from './DiscountPolicy';
import { Money } from './Money';
import { Screening } from './Screening';

export class AmountDiscountPolicy extends DiscountPolicy {
  #discountAmount: Money;

  constructor(discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
    this.#discountAmount = discountAmount;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return this.#discountAmount;
  }
}
