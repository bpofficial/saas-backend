import { Module } from '@nestjs/common';
import { CardsMutationResolver, CardsResolver } from './cards.resolver';

@Module({
    providers: [CardsResolver, CardsMutationResolver],
})
export class CardsModule {
}
