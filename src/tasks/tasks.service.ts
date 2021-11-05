import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

import { Task, TaskStatus } from './task.models';
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'

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

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;

        //define a temporary array to hold the result
        let tasks = this.getAllTasks();

        //do something with status
        if(status) {
            tasks = tasks.filter(task => task.status === status)
        }

        if(search) {
            tasks = tasks.filter(task => {
                if (task.title.includes(search) || task.description.includes(search)) {
                    return true
                }
                return false
            })
        }

        return tasks
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTasksById(id)
        task.status = status;
        return task;
    }
}
