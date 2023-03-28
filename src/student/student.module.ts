import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
      ],
      providers: [StudentService],
      controllers: [StudentController],
})
export class StudentModule {}
