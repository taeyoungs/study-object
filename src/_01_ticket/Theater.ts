import { Audience } from './Audience';
import { TicketSeller } from './TicketSeller';

export class Theater {
  #ticketSeller: TicketSeller;

  constructor(tickerSeller: TicketSeller) {
    this.#ticketSeller = tickerSeller;
  }

  enter(audience: Audience) {
    if (audience.bag.hasInvitation()) {
      const ticket = this.#ticketSeller.ticketOffice.getTicket();

      if (!ticket) {
        throw new Error('매진되었습니다.');
      }

      audience.bag.ticket = ticket;
    } else {
      const ticket = this.#ticketSeller.ticketOffice.getTicket();

      if (!ticket) {
        throw new Error('매진되었습니다.');
      }

      audience.bag.minusAmount(ticket.fee);
      this.#ticketSeller.ticketOffice.plusAmount(ticket.fee);
      audience.bag.ticket = ticket;
    }
  }
}
