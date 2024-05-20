import { Bag } from './Bag';
import { Ticket } from './Ticket';

export class Audience {
  #bag: Bag;

  constructor(bag: Bag) {
    this.#bag = bag;
  }

  buy(ticket: Ticket) {
    if (this.#bag.hasInvitation()) {
      this.#bag.ticket = ticket;
      return 0;
    }

    this.#bag.ticket = ticket;
    this.#bag.plusAmount(ticket.fee);
    return ticket.fee;
  }
}
