import { TicketOffice } from './TicketOffice';

export class TicketSeller {
  #ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.#ticketOffice = ticketOffice;
  }

  get ticketOffice() {
    return this.#ticketOffice;
  }
}
