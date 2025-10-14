import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPost } from '@/school/schemas/models/post.interface';
import { Post, PostDocument } from 'src/school/schemas/post.schema';
import { PostRepository } from '../post.repository';

@Injectable()
export class PostRepositoryMongo implements PostRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async createPost(post: IPost): Promise<IPost> {
    const novoPost = new this.postModel(post);
    return (await novoPost.save()).toObject() as unknown as IPost;
  }

  async getPostById(postId: string): Promise<IPost | null> {
    const post = await this.postModel.findById(postId).exec();
    return post ? (post.toObject() as unknown as IPost) : null;
  }

  async getAllPosts(limit: number, page: number): Promise<IPost[]> {
    const offset = (page - 1) * limit;
    const posts = await this.postModel.find().skip(offset).limit(limit).exec();
    return posts.map((post) => post.toObject() as unknown as IPost);
  }

  async getPostsByDocente(
    docenteId: string,
    limit: number,
    page: number,
  ): Promise<IPost[]> {
    const offset = (page - 1) * limit;
    const posts = await this.postModel
      .find({ autor: docenteId })
      .skip(offset)
      .limit(limit)
      .exec();
    return posts.map((post) => post.toObject() as unknown as IPost);
  }

  async getPostsByStatus(
    status: 'publicado' | 'rascunho',
    limit: number,
    page: number,
  ): Promise<IPost[]> {
    const offset = (page - 1) * limit;
    const posts = await this.postModel
      .find({ status: status })
      .skip(offset)
      .limit(limit)
      .exec();
    return posts.map((post) => post.toObject() as unknown as IPost);
  }

  async updatePost(
    postId: string,
    data: Partial<IPost>,
  ): Promise<IPost | null> {
    const post = await this.postModel
      .findByIdAndUpdate(postId, data, { new: true })
      .exec();
    return post ? (post.toObject() as unknown as IPost) : null;
  }

  async deletePost(postId: string): Promise<void> {
    await this.postModel.findByIdAndDelete(postId).exec();
  }
}
