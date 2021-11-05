import { TaskStatus } from '../task.models'

export class GetTasksFilterDto {
    status?: TaskStatus;
    search?: string
}