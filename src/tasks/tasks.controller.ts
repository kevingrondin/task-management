import { Controller, Delete, Post, Get, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { Task } from './task.models';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getTasksById(@Param('id') id: string): Task {
        return this.tasksService.getTasksById(id);
    }

    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto
    ): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string): void {
        this.tasksService.deleteTask(id)
    }
}
