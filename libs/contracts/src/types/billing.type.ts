/* tslint:disable:max-classes-per-file */
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Address {
    @Field(() => ID, { nullable: true })
    id?: string;

    @Field({ nullable: true })
    country?: string;

    @Field({ nullable: true })
    state?: string;

    @Field({ nullable: true })
    city?: string;

    @Field({ nullable: true })
    postalCode?: string;

    @Field({ nullable: true })
    line?: string;

    @Field({ nullable: true })
    line2?: string;
}
