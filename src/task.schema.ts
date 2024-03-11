/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Task {
    @Prop()
    _id: string

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    price: number
}

export const TaskSchema = SchemaFactory.createForClass(Task);