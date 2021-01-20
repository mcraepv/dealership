import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  modelName: 'Car',
  tableName: 'Cars',
})
export default class Car extends Model<Car> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  doors: number;

  @AllowNull(false)
  @Column
  automatic: boolean;

  @AllowNull(false)
  @Column
  isNew: boolean;

  @AllowNull(false)
  @Column
  price: number;

  @AllowNull(false)
  @Column
  miles: number;

  @AllowNull(false)
  @Column
  dealershipId: string;

  @Column
  employeeId: string;

  @Column
  clientId: string;

  @AllowNull(false)
  @Column
  sold: boolean;

  @AllowNull(false)
  @CreatedAt
  @Column
  createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column
  updatedAt: Date;
}
