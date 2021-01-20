import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Webhook, WebhookFilterArgs, WebhookMutations } from './types';
import { GqlContext, setRpcContext } from '@server/core';
import { Webhook as RpcWebhook } from '@server/proto-schema/webhook';

@Resolver(() => Webhook)
export class WebhooksResolver {
    @Query(() => Webhook!, { nullable: true })
    async webhook(
        @Args('id') id: string,
        @Context() ctx: GqlContext,
    ): Promise<RpcWebhook> {
        const rsp = await ctx?.rpc?.webhook?.svc
        ?.readWebhook(
            {
                id,
            },
            setRpcContext(ctx),
        )
        .toPromise();

        return rsp.webhook;
    }

    @Query(() => [Webhook!], { nullable: true })
    async webhooks(
        @Args() input: WebhookFilterArgs,
        @Context() ctx: GqlContext,
    ): Promise<RpcWebhook[]> {
        const rsp = await ctx?.rpc?.webhook?.svc
        ?.findWebhook(
            {
                filter: JSON.stringify(input?.where),
                paginate: input?.paginate,
            },
            setRpcContext(ctx),
        )
        .toPromise();

        return rsp.webhooks;
    }

    @Mutation(() => WebhookMutations, { nullable: true, name: 'webhook' })
    webhookMutations() {
        return {};
    }
}
