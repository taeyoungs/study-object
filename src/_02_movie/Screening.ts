import { Customer } from './Customer';
import { Reservation } from './Reservation';

export class Screening {
  #movie: Movie;
  #sequence: number;
  #whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.#movie = movie;
    this.#sequence = sequence;
    this.#whenScreened = whenScreened;
  }

  getStartTime() {
    return this.#whenScreened;
  }

  isSequence(sequence: number) {
    return this.#sequence === sequence;
  }

  getMovieFee() {
    this.#movie.fee;
  }

  calculateFee(audienceCount: number) {
    return this.#movie.calcalateFee(this).times(audienceCount);
  }

  reserve(customer: Customer, audienceCount: number) {
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }
}
