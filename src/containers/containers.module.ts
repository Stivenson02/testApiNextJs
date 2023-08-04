import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContainerController } from './controllers/container.controller';
import { ContainerService } from './services/container.service';
import { Budget } from './entities/budget.entity';
import { Container } from './entities/container.entity';
import { Stat } from './entities/stat.entity';
import { StatController } from './controllers/stat.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget, Container, Stat])
  ],
  providers: [ ContainerService],
  controllers: [ ContainerController, StatController]
})
export class ContainersModule {}
