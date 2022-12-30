import { Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { Observable } from 'rxjs';
import { FormPost } from "../models/post.interface";
import { FormService } from '../services/form.service';
import { DeleteResult, UpdateResult } from 'typeorm';
@Controller('form')
export class FormController {
    constructor(private formService: FormService) {}

    @Post()
    create(@Body() formPost: FormPost): Observable<FormPost> {
        try {
            return this.formService.createPost(formPost)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'erro :(',
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
        
    }
    
    @Get()
    findAll(): Observable<FormPost[]>{
        try {
            return this.formService.findAllPosts();          
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'erro :(',
            }, HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    } 

    @Get(':id')
    findOne(@Param('id') id: number){
        try {
            return this.formService.findOnePost(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'erro :(',
            }, HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
        
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() formPost: FormPost
    ): Observable<UpdateResult> {
        try {
            return this.formService.updatePost(id, formPost);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'erro. confira os dados',
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
        
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.formService.deletePost(id);
    }
}
