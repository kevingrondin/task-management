import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.models';
import { CreateTaskDto } from './dto/create-task.dto'
import { v4 as uuid } from 'uuid'

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task
    }
}
