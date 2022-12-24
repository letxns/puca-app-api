import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormService } from './services/form.service';
import { FormController } from './controllers/form.controller';
import { FormPostEntity } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormPostEntity])
  ],
  providers: [FormService],
  controllers: [FormController]
})
export class FormModule {}
