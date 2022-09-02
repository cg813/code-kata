import { IsNumber } from 'class-validator';

export class SheetDto {
  @IsNumber()
  year: number;

  @IsNumber()
  month: number;

  @IsNumber()
  profitOrLoss: number;

  @IsNumber()
  assetsValue: number;
}
