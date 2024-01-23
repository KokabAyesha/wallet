import { Controller, Get } from "@nestjs/common";
import { userService } from "./user.service";

@Controller() //decorator
export class userController{
    constructor(private readonly userService: userService){}
   

}