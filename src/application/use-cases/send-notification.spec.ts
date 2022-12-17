import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'New notification being tested.',
      category: 'test',
      recipientId: 'some-unique-id',
    });

    expect(notificationRepository.notifications[0]).toBe(notification);
  });
});
