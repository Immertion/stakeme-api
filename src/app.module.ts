import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { BlockModule } from './block/block.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BlockModule,
    TransactionsModule,
    ConfigModule.forRoot({envFilePath: '.env',})
]
})
export class AppModule {}
