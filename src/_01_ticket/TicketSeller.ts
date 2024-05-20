import { Audience } from './Audience';
import { TicketOffice } from './TicketOffice';

export class TicketSeller {
  #ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.#ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    const ticket = this.#ticketOffice.getTicket();

    if (!ticket) {
      throw new Error('매진되었습니다.');
    }

    const fee = audience.buy(ticket);
    this.#ticketOffice.plusAmount(fee);
  }
}
