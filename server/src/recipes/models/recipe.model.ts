import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Recipe {
  @Field(type => ID)
  id: Number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;
}
