import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutAuthorInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;
}
