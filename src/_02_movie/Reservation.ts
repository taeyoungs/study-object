import { Customer } from './Customer';
import { Money } from './Money';
import { Screening } from './Screening';

export class Reservation {
  #customer: Customer;
  #screening: Screening;
  #fee: Money;
  #audienceCount: number;

  constructor(customer: Customer, screening: Screening, fee: Money, audienceCount: number) {
    this.#customer = customer;
    this.#screening = screening;
    this.#fee = fee;
    this.#audienceCount = audienceCount;
  }
}
