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

  hasInvitation() {
    return this.#invitation !== null;
  }

  hasTicket() {
    return this.#ticket !== null;
  }

  set ticket(ticket: Ticket) {
    this.#ticket = ticket;
  }

  minusAmount(amount: number) {
    this.#amount -= amount;
  }

  plusAmount(amount: number) {
    this.#amount += amount;
  }
}
