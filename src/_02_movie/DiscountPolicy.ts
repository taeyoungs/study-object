import { DiscountCondition } from './DiscountCondition';
import { Money } from './Money';

export abstract class DiscountPolicy {
  #conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this.#conditions = conditions;
  }

  calculdateDiscountAmount(screening: Screening) {
    for (const condition of this.#conditions) {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
