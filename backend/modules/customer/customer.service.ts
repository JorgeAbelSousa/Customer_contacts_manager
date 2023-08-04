import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomersRepository } from './repositories/customers.repository';
import { hash } from 'bcryptjs';

@Injectable()
export class CustomerService {
  constructor(private customersRepository: CustomersRepository) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const findCustomer = await this.customersRepository.findByEmail(
      createCustomerDto.email,
    );

    if (findCustomer) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await hash(createCustomerDto.password, 10);

    const customer = await this.customersRepository.create({
      ...createCustomerDto,
      password: hashedPassword,
    });

    return customer;
  }

  async findAll() {
    return await this.customersRepository.findAll();
  }

  async findOne(id: string) {
    const findCustomer = await this.customersRepository.findOne(id);

    if (!findCustomer) {
      throw new NotFoundException('Customer not found');
    }

    return findCustomer;
  }

  async findByEmail(email: string) {
    const findCustomer = await this.customersRepository.findByEmail(email);

    return findCustomer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const findCustomer = await this.customersRepository.findOne(id);

    if (!findCustomer) {
      throw new NotFoundException('Customer not found');
    }

    return await this.customersRepository.update(id, updateCustomerDto);
  }

  async remove(id: string) {
    const findCustomer = await this.customersRepository.findOne(id);

    if (!findCustomer) {
      throw new NotFoundException('Customer not found');
    }

    return await this.customersRepository.delete(id);
  }
}
