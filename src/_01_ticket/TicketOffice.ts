import { Audience } from './Audience';
import { Ticket } from './Ticket';

export class TicketOffice {
  #amount: number;
  #tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.#amount = amount;
    this.#tickets = tickets;
  }

  sellTicketTo(audience: Audience) {
    const ticket = this.getTicket();

    if (!ticket) {
      throw new Error('매진되었습니다.');
    }

    this.plusAmount(audience.buy(ticket));
  }

  private getTicket() {
    return this.#tickets.shift();
  }

  minusAmount(amount: number) {
    this.#amount -= amount;
  }

  private plusAmount(amount: number) {
    this.#amount += amount;
  }
}
