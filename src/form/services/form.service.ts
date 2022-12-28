import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FormPostEntity } from '../models/post.entity';
import { FormPost } from '../models/post.interface';

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(FormPostEntity)
        private readonly formPostRepository: Repository<FormPostEntity>
    ) {}

    createPost(formPost: FormPost): Observable<FormPost> {
        return from(this.formPostRepository.save(formPost))
    }

    findAllPosts() {
        return from(this.formPostRepository.find())
    }
    
    findOnePost(id) {
        return from(this.formPostRepository.findByIds(id))
    }

    updatePost(id: number, formPost: FormPost): Observable<UpdateResult> {
        return from(this.formPostRepository.update(id, formPost))
    }

    deletePost(id: number): Observable<DeleteResult>{
        return from(this.formPostRepository.delete(id))
    }
}
