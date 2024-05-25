import { Audience } from './Audience';
import { TicketOffice } from './TicketOffice';

export class TicketSeller {
  #ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.#ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    this.#ticketOffice.sellTicketTo(audience);
  }
}
