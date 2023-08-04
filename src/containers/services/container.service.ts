import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Budget } from '../entities/budget.entities';
import { Container } from '../entities/container.entities';
import { Stat } from '../entities/stat.entities';

@Injectable()
export class ContainerService {

    constructor(
        @InjectRepository(Budget) private budgetsRepo: Repository<Budget>,
        @InjectRepository(Container) private containersRepo: Repository<Container>,
        @InjectRepository(Stat) private statsRepo: Repository<Stat>
    ){}


    createBudget(body: any){
        const newBudet = this.budgetsRepo.create(body);
        return this.budgetsRepo.save(newBudet);
    }

    createContainer(body: any){
        const newContainer = this.containersRepo.create(body);
        return this.containersRepo.save(newContainer);
    }

    createStat(body: any){
        const newStat = this.statsRepo.create(body);
        return this.statsRepo.save(newStat);
    }

    findAllStat(){
        return this.statsRepo.find();
    }

}
