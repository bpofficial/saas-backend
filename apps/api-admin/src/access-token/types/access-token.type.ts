import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Node } from '@server/contracts';
import { Filterable } from '@server/core';

@Directive(`@key(fields: "id")`)
@ObjectType()
export class AccessToken extends Node {
    @Field(() => [String])
    scopes: string[];

    @Field()
    token: string;

    @Filterable()
    @Field({ nullable: true })
    active: boolean;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    expireAt: string;
}

@ObjectType()
export class AccessTokenMutations {
}
