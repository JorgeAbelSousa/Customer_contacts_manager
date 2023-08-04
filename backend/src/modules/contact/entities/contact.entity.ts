import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  registerDate: Date;
  customerId: string;

  constructor() {
    this.id = randomUUID();
  }
}
