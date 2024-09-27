import { InjectRepository } from '@nestjs/typeorm';
import { Tenant } from './tenant.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantService extends TypeOrmCrudService<Tenant> {
  constructor(@InjectRepository(Tenant) repo) {
    super(repo);
  }
}
