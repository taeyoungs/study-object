import { DiscountCondition } from './DiscountCondition';
import { Money } from './Money';
import { Screening } from './Screening';

export abstract class DiscountPolicy {
  #conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this.#conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening) {
    for (const condition of this.#conditions) {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
