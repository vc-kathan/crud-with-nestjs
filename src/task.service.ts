/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {

  constructor(@InjectModel('Task') private taskModel: Model<ITask>) { }

  async getAllTasks(): Promise<ITask[]> {
    const taskData = await this.taskModel.find();
    if (!taskData || taskData.length == 0) {
      throw new NotFoundException('Students data not found!');
    }
    return taskData;
  }
}