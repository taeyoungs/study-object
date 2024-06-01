import { BigDecimal } from './BigDecimal';
import { PeriodCondition } from './DiscountCondition/PeriodCondition';
import { DiscountPolicy } from './DiscountPolicy/DiscountPolicy';
import { PercentDiscountPolicy } from './DiscountPolicy/PercentDiscountPolicy';
import { Money } from './Money';
import { Screening } from './Screening';

export class Movie {
  #title: string;
  #runningTime: number;
  #fee: Money;
  #discountPolicy: DiscountPolicy;

  constructor(title: string, runningTime: number, fee: Money, discountPolicy: DiscountPolicy) {
    this.#title = title;
    this.#runningTime = runningTime;
    this.#fee = fee;
    this.#discountPolicy = discountPolicy;
  }

  get fee() {
    return this.#fee;
  }

  calculateMovieFee(screening: Screening) {
    if (this.#discountPolicy === null) {
      return this.#fee;
    }

    return this.#fee.minus(this.#discountPolicy.calculateDiscountAmount(screening));
  }
}

/**
new Movie(
  '샘플',
  1000,
  new Money(BigDecimal.valueOf(1000)),
  new PercentDiscountPolicy(10, [new PeriodCondition(0, new Date(), new Date())])
);
 */
