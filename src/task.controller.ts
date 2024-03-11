/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async getAll(@Res() response) {
    try {
      const taskData = await this.taskService.getAllTasks();
      return response.status(HttpStatus.OK).json({
        message: 'All tasks data found successfully', taskData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

}
