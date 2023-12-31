import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';

import { ContainersModule } from './containers/containers.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'stiff',
      password: 'postgres',
      database: 'my_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    ContainersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
