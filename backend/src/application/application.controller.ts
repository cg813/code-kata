import { Controller, Post, Put, HttpException, HttpStatus, Body } from '@nestjs/common';
import { validate } from 'class-validator';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/CreateApplicationDto';
import { UpdateApplicationDto } from './dto/UpdateApplicationDto';

@Controller("application")
export class ApplicationController {
  constructor(
    private readonly applicationService: ApplicationService
  ) {
  }

  @Post("")
  async createApplication (
  ): Promise<CreateApplicationDto> {
    try {
      return this.applicationService.createInitialApplication();
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Put("")
  async updateApplication (
    @Body() data: UpdateApplicationDto
  ): Promise<CreateApplicationDto> {
    try {
      return this.applicationService.updateApplication(data);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
