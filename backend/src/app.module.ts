import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ContactModule } from './modules/contact/contact.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [CustomerModule, ContactModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
