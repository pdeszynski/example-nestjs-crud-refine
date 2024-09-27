import { Crud } from '@dataui/crud';
import { Tenant } from './tenant.entity';
import { TenantService } from './tenant.service';
import { Controller } from '@nestjs/common';

@Crud({
  model: {
    type: Tenant,
  },
  params: {
    slug: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@Controller('tenant')
export class TenantController implements TenantController {
  constructor(public service: TenantService) {}
}
