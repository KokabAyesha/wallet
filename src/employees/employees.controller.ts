import { Controller} from '@nestjs/common';
import { EmployeesService } from './employees.service';
@Controller()
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}
}