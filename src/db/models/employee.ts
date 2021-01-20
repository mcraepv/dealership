import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class Employee extends Model {
  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column
  age: number;

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @AllowNull(false)
  @Column
  dealershipId: string;

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
