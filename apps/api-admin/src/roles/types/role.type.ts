import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Node } from '@server/contracts';

@Directive(`@key(fields: "id")`)
@ObjectType()
export class Role extends Node {
    @Field()
    name: string;

    @Field()
    normalizedName!: string;
}
