import { Bag } from './Bag';

export class Audience {
  #bag: Bag;

  constructor(bag: Bag) {
    this.#bag = bag;
  }

  get bag() {
    return this.#bag;
  }
}
