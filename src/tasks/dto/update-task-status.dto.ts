import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.models';

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}