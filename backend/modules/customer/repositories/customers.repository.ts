/* eslint-disable prettier/prettier */
import { CreateCustomerDto } from 'src/modules/customer/dto/create-customer.dto';
import { UpdateCustomerDto } from 'src/modules/customer/dto/update-customer.dto';
import { Customer } from 'src/modules/customer/entities/customer.entity';

export abstract class CustomersRepository {
  abstract create(data: CreateCustomerDto): Promise<Customer>;

  abstract findAll(): Promise<Customer[]>;

  abstract findOne(id: string): Promise<Customer>;

  abstract findByEmail(email: string): Promise<Customer>;

  abstract update(id: string, data: UpdateCustomerDto): Promise<Customer>;

  abstract delete(id: string): Promise<void>;
}
