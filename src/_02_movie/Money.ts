import { BigDecimal } from './BigDecimal';

export class Money {
  #amount: BigDecimal;
  static ZERO: Money = Money.wons(0);

  constructor(amount: BigDecimal) {
    this.#amount = amount;
  }

  static wons(amount: number) {
    return new Money(BigDecimal.valueOf(amount));
  }

  plus(amount: Money) {
    return new Money(this.#amount.add(amount.#amount));
  }

  minus(amount: Money) {
    return new Money(this.#amount.subtract(amount.#amount));
  }

  times(percent: number) {
    return new Money(this.#amount.multiply(BigDecimal.valueOf(percent)));
  }

  isLessThan(other: Money) {
    return this.#amount.compareTo(other.#amount) < 0;
  }

  isGreaterThanOrEqual(other: Money) {
    return this.#amount.compareTo(other.#amount) >= 0;
  }
}
