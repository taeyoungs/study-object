import { compareAsc } from 'date-fns';

import { DiscountCondition } from './DiscountCondition/DiscountCondition';
import { Screening } from './Screening';

type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// 기간 할인 조건
export class PeriodCondition implements DiscountCondition {
  #dayOfWeek: DayOfWeek;
  #startTime: Date;
  #endTime: Date;

  constructor(dayOfWeek: DayOfWeek, startTime: Date, endTime: Date) {
    this.#dayOfWeek = dayOfWeek;
    this.#startTime = startTime;
    this.#endTime = endTime;
  }

  // Screening의 상영 요일이 dayOfWeek와 같고 상영 시작 시간이
  // startTime과 endTime 사이에 있을 경우에는 true를 반환하고,
  // 그렇지 않은 경우에는 false를 반환한다.
  isSatisfiedBy(screening: Screening) {
    return (
      screening.getStartTime().getDay() === this.#dayOfWeek &&
      compareAsc(this.#startTime, screening.getStartTime()) <= 0 &&
      compareAsc(this.#endTime, screening.getStartTime()) >= 0
    );
  }
}
