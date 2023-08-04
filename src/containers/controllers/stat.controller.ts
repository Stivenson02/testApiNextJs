import { Controller, Get } from '@nestjs/common';
import { ContainerService } from '../services/container.service';

@Controller('api/stats')
export class StatController {
    constructor(
        private containerService: ContainerService
    ){}

    @Get()
    getAll(){
        return this.containerService.findAllStat();
    }
}
