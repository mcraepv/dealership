import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class Client extends Model {
  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @AllowNull(false)
  @Column
  lookingForNewCar: boolean;

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
