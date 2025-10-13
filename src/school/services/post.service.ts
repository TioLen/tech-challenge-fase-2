import { Injectable } from '@nestjs/common';
import { PostRepository } from '../repositories/post.repository';
import { IPost } from '../schemas/models/post.interface';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async create(post: IPost): Promise<IPost> {
    return this.postRepository.createPost(post);
  }

  async findAll(limit: number, page: number): Promise<IPost[]> {
    return this.postRepository.getAllPosts(limit, page);
  }

  async findOne(id: string): Promise<IPost | null> {
    return this.postRepository.getPostById(id);
  }
  
  async findByDocente(docenteId: string, limit: number, page: number): Promise<IPost[]> {
    return this.postRepository.getPostsByDocente(docenteId, limit, page);
  }

  async findByStatus(status: 'publicado' | 'rascunho', limit: number, page: number): Promise<IPost[]> {
    return this.postRepository.getPostsByStatus(status, limit, page);
  }

  async update(id: string, updatePostData: Partial<IPost>): Promise<IPost | null> {
    return this.postRepository.updatePost(id, updatePostData);
  }

  async remove(id: string): Promise<void> {
    await this.postRepository.deletePost(id);
  }
}