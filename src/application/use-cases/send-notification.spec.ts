import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'New notification being tested.',
      category: 'test',
      recipientId: 'some-unique-id',
    });

    expect(notification).toBeTruthy();
  });
});
