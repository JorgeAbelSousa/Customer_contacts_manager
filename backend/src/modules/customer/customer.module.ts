import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomersRepository } from './repositories/customers.repository';
import { CustomersPrismaRepository } from './repositories/prisma/customers.prisma.repository';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    PrismaService,
    { provide: CustomersRepository, useClass: CustomersPrismaRepository },
  ],
  exports: [CustomerService],
})
export class CustomerModule {}
