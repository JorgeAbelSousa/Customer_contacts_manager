/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCustomerDto } from '../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../dto/update-customer.dto';
import { Customer } from '../../entities/customer.entity';
import { CustomersRepository } from '../customers.repository';

@Injectable()
export class CustomersPrismaRepository implements CustomersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    Object.assign(customer, {
      ...data,
    });

    const newCustomer = await this.prisma.customer.create({
      data: { ...customer },
    });
    return plainToInstance(Customer, newCustomer);
  }

  async findAll(): Promise<Customer[]> {
    const customers: Customer[] = await this.prisma.customer.findMany();
    return plainToInstance(Customer, customers);
  }

  async findOne(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
    });

    return plainToInstance(Customer, customer);
  }

  async findByEmail(email: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    });

    return customer;
  }

  async update(id: string, data: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.prisma.customer.update({
      where: { id },
      data: { ...data },
    });

    return customer;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({
      where: { id },
    });
  }
}
