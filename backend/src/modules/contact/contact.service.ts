import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactsRepository) {}

  async create(createContactDto: CreateContactDto, customerId: string) {
    return await this.contactRepository.create(createContactDto, customerId);
  }

  async findAll() {
    return await this.contactRepository.findAll();
  }

  async findOne(id: string) {
    return await this.contactRepository.findOne(id);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return await this.contactRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    return await this.contactRepository.delete(id);
  }
}
