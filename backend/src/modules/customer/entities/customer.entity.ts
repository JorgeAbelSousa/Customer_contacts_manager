import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class Customer {
  readonly id: string;
  fullName: string;
  email: string;

  @Exclude()
  password: string;
  phoneNumber: string;
  registerDate: Date;

  constructor() {
    this.id = randomUUID();
  }
}
