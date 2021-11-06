import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
