import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ description: 'Contact name' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ description: 'Contact email' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contact phone number' })
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @Transform(() => new Date().toString(), {
    groups: ['transform'],
  })
  registerDate: string;
}
