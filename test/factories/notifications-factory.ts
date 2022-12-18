import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';

type Override = Partial<Notification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'some-unique-id',
    category: 'test',
    content: new Content('New notification to be canceled.'),
    ...override,
  });
}
