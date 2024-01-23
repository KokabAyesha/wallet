import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/employees')
  getEmployees(){
    return{
      status: true,
      data:[
      {
        id:1,
        name:"Ayesha"
      },
      {
        id:2,
        name:"Kokab"
      },
    ]
    }
  }
//   @Get('/employees')
// getEmployees(){
//   const employees = this.appService.getEmployees();
//   return {status: true, data: employees};
// }
}

