import { ApiProperty } from '@dataui/crud/lib/crud';
import { IsNumber, IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  @IsNumber()
  order: number;
}
