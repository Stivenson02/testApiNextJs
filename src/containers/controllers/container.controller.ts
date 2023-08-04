import { Controller, Post,Get, Param, Body } from '@nestjs/common';

@Controller('api/container')
export class ContainerController {

    @Post()
    create(@Body() body: any){
        return body["containers"];
    }
}
