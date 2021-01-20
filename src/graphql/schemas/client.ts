import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export default class Client {
  @Field() id: string;
  @Field() firstName: string;
  @Field() lastName: string;
  @Field() phoneNumber: string;
  @Field() lookingForNewCar: boolean;
  @Field() updatedAt: Date;
  @Field() createdAt: Date;
}

@InputType()
export class ClientInput {
  @Field() id: string;
  @Field() firstName: string;
  @Field() lastName: string;
  @Field() phoneNumber: string;
  @Field() lookingForNewCar: boolean;
  @Field() updatedAt: Date;
  @Field() createdAt: Date;
}
