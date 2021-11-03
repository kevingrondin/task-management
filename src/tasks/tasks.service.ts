import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.models';
import { CreateTaskDto } from './dto/create-task.dto'
import { v4 as uuid } from 'uuid'

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

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

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id === id);
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTasksById(id)
        task.status = status;
        return task;
    }
}
