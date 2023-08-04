import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContainerController } from './controllers/container.controller';
import { ContainerService } from './services/container.service';
import { Budget } from './entities/budget.entities';
import { Container } from './entities/container.entities';
import { Stat } from './entities/stat.entities';
import { StatController } from './controllers/stat.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget, Container, Stat])
  ],
  providers: [ ContainerService],
  controllers: [ ContainerController, StatController]
})
export class ContainersModule {}
