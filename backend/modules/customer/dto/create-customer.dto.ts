import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ description: 'Customer name', type: String })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ description: 'Customer email', type: String })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Customer password', type: String })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Customer phone number', type: String })
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @Transform(() => new Date().toString(), {
    groups: ['transform'],
  })
  registerDate: string;
}
