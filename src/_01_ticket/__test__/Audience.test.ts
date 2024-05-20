import { Audience } from '../Audience';
import { Bag } from '../Bag';
import { Invitation } from '../Invitation';
import { Ticket } from '../Ticket';

test('초대장이 없는 경우 관람객의 가방에 티켓을 추가하고, 지불한 티켓값을 반환한다.', () => {
  const ticket = new Ticket(500);
  const bag = new Bag(1000);
  const audience = new Audience(bag);
  expect(audience.buy(ticket)).toBe(500);
});

test('초대장이 없는 경우 관람객의 가방에 티켓을 추가하고, 0 반환한다.', () => {
  const invitation = new Invitation(new Date());
  const ticket = new Ticket(500);
  const bag = new Bag(1000, invitation);
  const audience = new Audience(bag);
  expect(audience.buy(ticket)).toBe(0);
});
