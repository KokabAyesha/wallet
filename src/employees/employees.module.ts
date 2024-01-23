import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [EmployeesModule],
  controllers: [EmployeesController],
  providers: [EmployeesService], //AppServices is dependecies of provider
})
export class EmployeesModule {}