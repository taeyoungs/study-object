export class BigDecimal {
  #num: number;

  constructor(num: number) {
    this.#num = num;
  }

  static valueOf(num: number) {
    return new BigDecimal(num);
  }

  add(bigDecimal: BigDecimal) {
    return new BigDecimal(this.#num + bigDecimal.#num);
  }

  subtract(bigDecimal: BigDecimal) {
    return new BigDecimal(this.#num - bigDecimal.#num);
  }

  multiply(bigDecimal: BigDecimal) {
    return new BigDecimal(this.#num * bigDecimal.#num);
  }

  compareTo(bigDecimal: BigDecimal) {
    if (this.#num > bigDecimal.#num) return 1;
    if (this.#num < bigDecimal.#num) return -1;
    return 0;
  }
}
