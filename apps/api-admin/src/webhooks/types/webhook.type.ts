import { createUnionType, Directive, Field, InputType, InterfaceType, ObjectType } from '@nestjs/graphql';
import { Node, WebhookApiKeyFieldEnum, WebhookAuthEnum, WebhookCrudEnum, WebhookHttpVerbEnum } from '@server/contracts';
import { Filterable } from '@server/core/decorators';

@InputType('WebhookAuthTypeInput')
@InterfaceType({
    resolveType(auth) {
        if (auth.type === WebhookAuthEnum.API_KEY) {
            return AuthApiKey;
        }
        if (auth.type === WebhookAuthEnum.BASIC) {
            return AuthBasic;
        }
        if (auth.type === WebhookAuthEnum.TOKEN) {
            return AuthToken;
        }
        if (auth.type === WebhookAuthEnum.OAUTH_2) {
            return AuthOAuth2;
        }
        return AuthNone;
    },
})
export abstract class WebhookAuthType {
    @Field(() => WebhookAuthEnum)
    type: WebhookAuthEnum;
}

@InputType('AuthBasicInput')
@ObjectType({
    implements: [WebhookAuthType],
})
export class AuthBasic extends WebhookAuthType {
    @Field()
    username: string;
    @Field()
    password: string;
}

@InputType('AuthTokenInput')
@ObjectType({
    implements: [WebhookAuthType],
})
export class AuthToken extends WebhookAuthType {
    @Field()
    token: string;
}

@InputType('AuthNoneInput')
@ObjectType({
    implements: [WebhookAuthType],
})
export class AuthNone extends WebhookAuthType {
}

@InputType('AuthApiKeyInput')
@ObjectType({
    implements: [WebhookAuthType],
})
export class AuthApiKey extends WebhookAuthType {
    @Field()
    key: string;

    @Field()
    value: string;

    @Field(() => WebhookApiKeyFieldEnum)
    addTo: WebhookApiKeyFieldEnum;
}

@InputType('AuthOAuth2Input')
@ObjectType({
    implements: [WebhookAuthType],
})
export class AuthOAuth2 extends WebhookAuthType {
    @Field()
    token: string;

    @Field(() => WebhookApiKeyFieldEnum)
    addTo: WebhookApiKeyFieldEnum;
}

export const AuthTypeUnion = createUnionType({
    name: 'AuthTypeUnion',
    types: () => [AuthApiKey, AuthOAuth2, AuthNone, AuthToken, AuthBasic],
    resolveType(auth) {
        if (auth.type === WebhookAuthEnum.API_KEY) {
            return AuthApiKey;
        }
        if (auth.type === WebhookAuthEnum.BASIC) {
            return AuthBasic;
        }
        if (auth.type === WebhookAuthEnum.TOKEN) {
            return AuthToken;
        }
        if (auth.type === WebhookAuthEnum.OAUTH_2) {
            return AuthOAuth2;
        }
        return AuthNone;
    },
});

@Directive(`@key(fields: "id")`)
@ObjectType()
export class Webhook extends Node {
    @Filterable()
    @Field()
    name: string;

    @Filterable()
    @Field()
    endpoint: string;

    @Filterable()
    @Field(() => WebhookHttpVerbEnum)
    requestType: WebhookHttpVerbEnum;

    @Filterable()
    @Field(() => WebhookCrudEnum, { defaultValue: WebhookCrudEnum.ALL })
    action: WebhookCrudEnum;
    @Filterable()
    @Field()
    active?: boolean;

    @Filterable()
    @Field(() => AuthTypeUnion, { nullable: true })
    auth?: typeof AuthTypeUnion;
}

@ObjectType()
export class WebhookMutations {
}
