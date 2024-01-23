import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getEmployees(){
    return[
     
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
