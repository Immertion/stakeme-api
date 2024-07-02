import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [BlockController],
  providers: [BlockService]
})
export class BlockModule {}
