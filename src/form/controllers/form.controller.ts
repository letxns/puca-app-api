import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { Observable } from 'rxjs';
import { FormPost } from '../models/post.interface';
import { FormService } from '../services/form.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('form')
export class FormController {
    constructor(private formService: FormService) {}

    @Post()
    create(@Body() formPost: FormPost): Observable<FormPost> {
        return this.formService.createPost(formPost);
    }
    
    @Get()
    findAll(): Observable<FormPost[]>{
        return this.formService.findAllPosts();
    } 

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.formService.findOnePost(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() formPost: FormPost
    ): Observable<UpdateResult> {
        return this.formService.updatePost(id, formPost);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.formService.deletePost(id);
    }
}
