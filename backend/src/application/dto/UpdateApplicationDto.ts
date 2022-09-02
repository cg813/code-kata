import { IsNumber, IsString } from 'class-validator';

export class UpdateApplicationDto {
  @IsString()
  applicationId: string;

  @IsString()
  userId: string;

  @IsNumber()
  loanAmount: number;
}
