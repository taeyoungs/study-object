import { Ticket } from './Ticket';

export class TicketOffice {
  #amount: number;
  #tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.#amount = amount;
    this.#tickets = tickets;
  }

  getTicket() {
    return this.#tickets.shift();
  }

  minusAmount(amount: number) {
    this.#amount -= amount;
  }

  plusAmount(amount: number) {
    this.#amount += amount;
  }
}
