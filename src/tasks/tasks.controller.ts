import { Controller, Delete, Post, Get, Body, Param, Patch, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { UpdateTaskStatusDto } from './dto/update-task-status.dto'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto
    ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string): Promise<void> {
        return this.tasksService.deleteTask(id);
    }

    @Get()
    getTasks(
        @Query() filterDto: GetTasksFilterDto
    ): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto)
    }

    // @Get('/:id')
    // getTasksById(@Param('id') id: string): Promise<Task> {
    //     return this.tasksService.getTasksById(id);
    // }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    ): Promise<Task> {
        const { status } = updateTaskStatusDto;
        return this.tasksService.updateTaskStatus(id, status);
    }
}
