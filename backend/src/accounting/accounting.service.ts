import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { SheetDto } from './dto/SheetDto';

@Injectable()
export class AccountingService {
  private serviceUrl: string;
  constructor(
  ) {
    this.serviceUrl = "https://accounting.com/";
  }

  async getBalanceSheet(userId: string): Promise<SheetDto[]> {
    /*
     * TODO:
     * Fetch shees by userId from serviceUrl
     */

    const fakeSheets: SheetDto[] = [
      {
          "year": 2020,
          "month": 12,
          "profitOrLoss": 250000,
          "assetsValue": 1234
      },
      {
          "year": 2020,
          "month": 11,
          "profitOrLoss": 1150,
          "assetsValue": 5789
      },
      {
          "year": 2020,
          "month": 10,
          "profitOrLoss": 2500,
          "assetsValue": 22345
      },
      {
          "year": 2020,
          "month": 9,
          "profitOrLoss": -187000,
          "assetsValue": 223452
      }
    ];

    return fakeSheets;
  }
}
