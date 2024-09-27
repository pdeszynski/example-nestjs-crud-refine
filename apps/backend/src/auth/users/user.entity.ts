import { ApiProperty } from '@dataui/crud/lib/crud';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tenant } from '../tenants/tenant.entity';
import { IsEmail, IsNumber } from 'class-validator';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @ManyToOne(() => Tenant, (tenant) => tenant.id, {
    nullable: true,
  })
  @JoinColumn()
  tenant!: Tenant;

  @ApiProperty()
  @Column()
  tenantId: string;

  @ApiProperty()
  @IsNumber()
  @Column({ default: 0 })
  order: number;
}
