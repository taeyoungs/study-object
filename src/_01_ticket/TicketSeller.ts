import { Audience } from './Audience';
import { TicketOffice } from './TicketOffice';

export class TicketSeller {
  #ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.#ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    if (audience.bag.hasInvitation()) {
      const ticket = this.#ticketOffice.getTicket();

      if (!ticket) {
        throw new Error('매진되었습니다.');
      }

      audience.bag.ticket = ticket;
    } else {
      const ticket = this.#ticketOffice.getTicket();

      if (!ticket) {
        throw new Error('매진되었습니다.');
      }

      audience.bag.minusAmount(ticket.fee);
      this.#ticketOffice.plusAmount(ticket.fee);
      audience.bag.ticket = ticket;
    }
  }
}
