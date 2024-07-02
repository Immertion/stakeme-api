import { Injectable } from '@nestjs/common';
import { Transaction } from './transactions.interface';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TransactionsService {
    private readonly rpcUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.rpcUrl = this.configService.get<string>('RPC_ETHEREUM_URL');
    }

    async getTransactionByHash(hash: string): Promise<Transaction> {
        const response = await lastValueFrom(
            this.httpService.post(this.rpcUrl, {
                jsonrpc: '2.0',
                method: 'eth_getTransactionByHash',
                params: [hash],
                id: 1,
            }),
        );
        if (!response.data.result) {
            throw new Error('Transaction not found');
        }

        const transaction = response.data.result;

        return {
            hash: transaction.hash,
            to: transaction.to,
            from: transaction.from,
            value: parseInt(transaction.value, 16),
            input: transaction.input,
            maxFeePerGas: parseInt(transaction.maxFeePerGas, 16),
            maxPriotityFeePerGas: parseInt(transaction.maxPriotityFeePerGas, 16),
            gasPrice: parseInt(transaction.gasPrice, 16)
        };
    }

}
