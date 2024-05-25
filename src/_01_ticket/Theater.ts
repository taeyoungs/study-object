import { Audience } from './Audience';
import { TicketSeller } from './TicketSeller';

export class Theater {
  #ticketSeller: TicketSeller;

  constructor(tickerSeller: TicketSeller) {
    this.#ticketSeller = tickerSeller;
  }

  enter(audience: Audience) {
    this.#ticketSeller.sellTo(audience);
  }
}
