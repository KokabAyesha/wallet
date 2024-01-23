import { Injectable } from "@nestjs/common";

@Injectable()
export class userService{
    getMessage() : string{
        return 'get message function has been called sucessfully'
    }

}