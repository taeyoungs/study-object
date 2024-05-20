import { Bag } from './Bag';
import { Ticket } from './Ticket';

export class Audience {
  #bag: Bag;

  constructor(bag: Bag) {
    this.#bag = bag;
  }

  get bag() {
    return this.#bag;
  }

  buy(ticket: Ticket) {
    return 0;
  }
}
