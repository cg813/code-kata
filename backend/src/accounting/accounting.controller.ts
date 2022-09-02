import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { SheetDto } from './dto/SheetDto';

@Controller("accounting")
export class AccountingController {
  constructor(
    private readonly accountingService: AccountingService
  ) {
  }

  @Get("/:userId")
  async createApplication (
    @Param('userId') userId: string
  ): Promise<SheetDto[]> {
    try {
      return this.accountingService.getBalanceSheet(userId);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
