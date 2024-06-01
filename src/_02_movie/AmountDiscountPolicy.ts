import { DefaultDiscountPolicy } from './DefaultDiscountPolicy';
import { DiscountCondition } from './DiscountCondition';
import { Money } from './Money';
import { Screening } from './Screening';

export class AmountDiscountPolicy extends DefaultDiscountPolicy {
  #discountAmount: Money;

  constructor(discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
    this.#discountAmount = discountAmount;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return this.#discountAmount;
  }
}
