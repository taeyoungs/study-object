import { DiscountPolicy } from './DiscountPolicy';
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
    return this.#fee.minus(this.#discountPolicy.calculateDiscountAmount(screening));
  }
}
