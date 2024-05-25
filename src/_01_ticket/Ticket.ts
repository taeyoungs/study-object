export class Ticket {
  #fee: number;

  constructor(fee: number) {
    this.#fee = fee;
  }

  get fee() {
    return this.#fee;
  }
}
