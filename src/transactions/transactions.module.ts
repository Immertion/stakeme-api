import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { HttpModule } from '@nestjs/axios';
import { TransactionsService } from './transactions.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
