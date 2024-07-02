import { Controller, Get, Param,  } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Get(":hash")
    async getTransactionByHash(@Param('hash') hash: string){
        return this.transactionsService.getTransactionByHash(hash);
    }

}
