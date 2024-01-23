import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get()
  getStudents(){ 
    const students= this.studentsService.getStudents();
    return {status:true, data:students};
  }
}
