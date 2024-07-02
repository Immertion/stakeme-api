import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { Block } from './block.interface';

@Injectable()
export class BlockService {
    private readonly rpcUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.rpcUrl = this.configService.get<string>('RPC_ETHEREUM_URL');
    }

    async getBlockByHeight(height: number): Promise<Block> {
        const hexHeight = '0x' + height.toString(16);
        
        const response = await lastValueFrom(
            this.httpService.post(this.rpcUrl, {
                jsonrpc: '2.0',
                method: 'eth_getBlockByNumber',
                params: [hexHeight, true],
                id: 1,
            }),
        );
        if (!response.data.result) {
            throw new Error('Block not found');
        }

        const block = response.data.result;

        return {
            height: parseInt(block.number, 16),
            hash: block.hash,
            parentHash: block.parentHash,
            gasLimit: parseInt(block.gasLimit, 16),
            gasUsed: parseInt(block.gasUsed, 16),
            size: parseInt(block.size, 16),
        };
    }
}
