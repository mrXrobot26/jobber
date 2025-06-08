import { AbstractModel } from '@jobber/nest.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field(() => String)
  email: string;
}