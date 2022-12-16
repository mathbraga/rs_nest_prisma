import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should create a notification', () => {
    const notification = new Notification({
      content: new Content('New notification test.'),
      category: 'test',
      recipientId: 'some-unique-id',
    });

    expect(notification).toBeTruthy();
  });
});
