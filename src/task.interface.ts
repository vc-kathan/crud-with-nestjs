/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface ITask extends Document {
    _id: string;
    name: string;
    description: string;
    price: number;
}