import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactsRepository } from './repositories/contacts.repository';
import { ContactsPrismaRepository } from './repositories/prisma/contacts.prisma.repository';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    { provide: ContactsRepository, useClass: ContactsPrismaRepository },
  ],
})
export class ContactModule {}
