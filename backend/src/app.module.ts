import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationService } from './application/application.service';
import { ApplicationController } from './application/application.controller';
import { AccountingService } from './accounting/accounting.service';
import { AccountingController } from './accounting/accounting.controller';
import { DecisionService } from './decision/decision.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ApplicationController,
    AccountingController
  ],
  providers: [
    AppService,
    ApplicationService,
    AccountingService,
    DecisionService
  ],
  exports: [
    AccountingService,
    DecisionService
  ]
})
export class AppModule {}
