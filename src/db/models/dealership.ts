import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class Dealership extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  location: string;

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
