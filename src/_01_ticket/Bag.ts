import { Invitation } from './Invitation';
import { Ticket } from './Ticket';

export class Bag {
  #amount: number;
  #invitation: Invitation | null;
  #ticket: Ticket | null;

  constructor(amount: number, invitation?: Invitation) {
    this.#amount = amount;
    this.#invitation = invitation ?? null;
    this.#ticket = null;
  }

  hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.ticket = ticket;
      return 0;
    }

    this.ticket = ticket;
    this.minusAmount(ticket.fee);
    return ticket.fee;
  }

  private hasInvitation() {
    return this.#invitation !== null;
  }

  hasTicket() {
    return this.#ticket !== null;
  }

  private set ticket(ticket: Ticket) {
    this.#ticket = ticket;
  }

  private minusAmount(amount: number) {
    this.#amount -= amount;
  }

  plusAmount(amount: number) {
    this.#amount += amount;
  }
}
