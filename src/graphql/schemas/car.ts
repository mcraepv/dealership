import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export default class Car {
  @Field() id: string;
  @Field() name: string;
  @Field() doors: number;
  @Field() automatic: boolean;
  @Field() isNew: boolean;
  @Field() price: number;
  @Field() miles: number;
  @Field() dealershipId: string;
  @Field() clientId: string;
  @Field() employeeId: string;
  @Field() sold: boolean;
  @Field() updatedAt: Date;
  @Field() createdAt: Date;
}

@InputType()
export class CarInput {
  @Field({ nullable: true }) id?: string;
  @Field() name: string;
  @Field() doors: number;
  @Field() automatic: boolean;
  @Field() isNew: boolean;
  @Field() price: number;
  @Field() miles: number;
  @Field() dealershipId: string;
  @Field({ nullable: true }) clientId?: string;
  @Field({ nullable: true }) employeeId?: string;
  @Field() sold: boolean;
  @Field({ nullable: true }) updatedAt?: Date;
  @Field({ nullable: true }) createdAt?: Date;
}
