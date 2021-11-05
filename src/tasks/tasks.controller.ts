import { Controller, Delete, Post, Get, Body, Param, Patch, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { Task, TaskStatus } from './task.models';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

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

    @Get()
    getTasks(
        @Query() filterDto: GetTasksFilterDto
    ): Task[] {
        if(Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilters(filterDto)
        }
        return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getTasksById(@Param('id') id: string): Task {
        return this.tasksService.getTasksById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus,
    ): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }
}
