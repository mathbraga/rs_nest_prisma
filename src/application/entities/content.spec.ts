import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a valid notification content', () => {
    const content = new Content('New notification received!');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Hi!')).toThrow();
  });

  it('should not be able to create a notification content with more than 250 characters', () => {
    expect(() => new Content('t'.repeat(251))).toThrow();
  });
});
