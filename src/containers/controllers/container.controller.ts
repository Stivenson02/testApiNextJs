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
            if (budget <= 0){
                new_array.push({"name": container["name"]})
            }
        });


        return new_array;
    }

}
