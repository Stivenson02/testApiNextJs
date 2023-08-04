import { Controller, Post,Get, Param, Body } from '@nestjs/common';
import { ContainerService } from '../services/container.service';

@Controller('api/container')
export class ContainerController {

    constructor(
        private containerService: ContainerService
    ){}

    @Post()
    create(@Body() body: any){
        let budget= body["budget"]
        let budget_total = budget
        const containers= body["containers"]
        const new_array=[]
        containers.forEach(element => {
            let total= element['transport_cost'] + element['amount']
            element["total"] = total
        });

        const container_orders = containers.sort((a, b) => {
            if (a["total"] < b["total"]) {
              return -1;
            }
          });

        container_orders.forEach(container => {
            budget = budget - container["total"]
            if (budget >= 0){
                new_array.push({"name": container["name"]})
            }
            if (budget < 0){
                budget = budget + container["total"]
            }
        });

        let stat_butget={ budget_total: budget_total, budget_dispatched: (budget_total - budget), budget_no_dispatched: budget}

        this.containerService.createStat(stat_butget);

        return new_array;
    }

}
