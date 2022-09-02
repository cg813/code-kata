import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateApplicationDto } from './dto/CreateApplicationDto';
import { UpdateApplicationDto } from './dto/UpdateApplicationDto';
import { DecisionService } from '../decision/decision.service';

@Injectable()
export class ApplicationService {
  constructor(
    private decisionService: DecisionService
  ) {}

  async createInitialApplication(): Promise<CreateApplicationDto> {
    /*
      * Todo:
      * Create new Application and save in db
    */

    const application = new CreateApplicationDto();
    application.applicationId = 'sdfi23982h323hj2fd333545saaaa';
    
    return application;
  }

  async updateApplication(data: UpdateApplicationDto) {
    /*
      * Todo:
      * Apply rules to summarise application
    */

    const result = await this.decisionService.getOutcome(data);
    return result;
  }
}
