export class Content {
  private readonly content: string;

  private validateContentLength(content: string): boolean {
    const contentLength = content.length;

    return contentLength >= 5 && contentLength <= 250;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length is not valid.');
    }

    this.content = content;
  }

  public get value(): string {
    return this.content;
  }
}
