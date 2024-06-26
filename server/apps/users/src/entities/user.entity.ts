import { ObjectType, Field, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class Avators {
  @Field()
  id: string;

  @Field()
  public_id: string;

  @Field()
  url: string;

  @Field()
  userId: string;
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone_number: number;

  @Field()
  password: string;

  @Field(() => Avators, { nullable: true })
  avator?: Avators | null;

  @Field()
  role: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
