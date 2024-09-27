import { Module } from '@nestjs/common';
import TenantModule from './tenants/tenants.module';
import UserModule from './users/user.module';

@Module({
  imports: [TenantModule, UserModule],
})
export default class AuthModule {}
