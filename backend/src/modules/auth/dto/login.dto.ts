/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Customer email' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ description: 'Customer password' })
  @IsString()
  password: string;
}
