export class Notification {
  identifier: string;
  payload: any;

  constructor(payload: object) {
    this.payload = payload;
    this.identifier = this.payload.identifier;
  }

  get title(): string {
    return this.payload.title;
  }

  get body(): string {
    return this.payload.body;
  }

  get sound(): string {
    return this.payload.sound;
  }

  get badge(): number {
    return this.payload.badge;
  }

  get type(): string {
    return this.payload.type;
  }

  get thread(): string {
    return this.payload.thread;
  }

  // Android O and higher only below
  get importance(): number {
    return this.payload.importance;
  }

  get channelName(): string {
    return this.payload.channelName;
  }

  get channelId(): string {
    return this.payload.channelId;
  }
}
