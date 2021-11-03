import { Injectable } from '@nestjs/common';
import { Task } from './task.models';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
