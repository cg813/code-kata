import { Injectable } from '@nestjs/common';
import { AccountingService } from '../accounting/accounting.service';
import { UpdateApplicationDto } from '../application/dto/UpdateApplicationDto';

@Injectable()
export class DecisionService {
  private serviceUrl: string;
  constructor(
    private accountingService: AccountingService
  ) {
    this.serviceUrl = "https://accounting.com/";
  }

  async getOutcome(data: UpdateApplicationDto): Promise<any> {
    /*
     * TODO:
     * Fetch decision
     */
    const sheet = await this.accountingService.getBalanceSheet(data.userId);

    // This will be for last 12 months
    const profitsFor12 = sheet.reduce(
      (acc, curr) => acc + curr.profitOrLoss, 0
    )

    const totalAssets = sheet.reduce(
      (acc, curr) => acc + curr.assetsValue, 0
    );

    const averageAssets = totalAssets / sheet.length;

    let preAssessment = 20;

    if (profitsFor12 > 0) {
      preAssessment = 60;
    }

    if (averageAssets > data.loanAmount) {
      preAssessment = 100;
    }

    // Request Decision with application and preAssessment

    return {
      ...data,
      outcome: "approved"
    };
  }
}
