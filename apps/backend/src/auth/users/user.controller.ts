import {
  Crud,
  CrudRequest,
  CrudRequestInterceptor,
  ParsedRequest,
} from '@dataui/crud';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ClassSerializerInterceptor, Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { ApiExtraModels, ApiResponse } from '@nestjs/swagger';

@Crud({
  validation: {
    validateCustomDecorators: true,
  },
  model: {
    type: User,
  },
  params: {},
})
@Controller('user')
@ApiExtraModels(UserDTO)
export class UserController implements UserController {
  constructor(public service: UserService) {}

  // @UseInterceptors(CrudRequestInterceptor)
  @Get('/custom')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({ type: UserDTO })
  customRoute(
    @ParsedRequest() req: CrudRequest,
    @Query('something') something: number,
  ): UserDTO {
    return {
      id: '1',
      order: 0,
    };
  }
}
