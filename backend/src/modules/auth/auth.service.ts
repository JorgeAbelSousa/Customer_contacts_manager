import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService,
  ) {}

  async validateCustomer(customerEmail: string, customerPassword: string) {
    const customer = await this.customerService.findByEmail(customerEmail);

    if (customer) {
      const passwordMatch = await compare(customerPassword, customer.password);

      if (passwordMatch) {
        return { email: customer.email };
      }
    }

    return null;
  }

  async login(email: string) {
    const customer = await this.customerService.findByEmail(email);

    return {
      token: this.jwtService.sign({ email }, { subject: customer.id }),
    };
  }
}
