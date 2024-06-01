import { DiscountCondition } from './DiscountCondition';
import { Screening } from '../Screening';

// 순번 할인 조건
export class SequenceCondition implements DiscountCondition {
  #sequence: number;

  constructor(sequence: number) {
    this.#sequence = sequence;
  }

  // Screening의 상영 순번과 일치할 경우 할인 가능한 것으로 판단
  isSatisfiedBy(screening: Screening) {
    return screening.isSequence(this.#sequence);
  }
}
