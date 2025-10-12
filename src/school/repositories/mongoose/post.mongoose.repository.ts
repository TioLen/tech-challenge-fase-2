import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPost } from "src/school/schemas/models/post.interface";
import { Post, PostDocument } from "src/school/schemas/post.schema";
import { PostRepository } from "../post.repository";

@Injectable()
export class PostRepositoryMongo implements PostRepository {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
    ) {}
    
    async createPost(post: IPost): Promise<IPost> {
        const novoPost = new this.postModel(post);
        return novoPost.save();
    }

    async getPostById(postId: string): Promise<IPost | null> {
        return this.postModel.findById(postId).exec();
    }

    async getAllPosts(limit: number, page: number): Promise<IPost[]> {
        const offset = (page - 1) * limit;
        return this.postModel.find().skip(offset).limit(limit).exec();
    }

    async getPostsByDocente(docenteId: string, limit: number, page: number): Promise<IPost[]> {
        const offset = (page - 1) * limit;
        return this.postModel.find({ autor: docenteId }).skip(offset).limit(limit).exec();
    }

    async getPostsByStatus(status: "publicado" | "rascunho", limit: number, page: number): Promise<IPost[]> {
        const offset = (page - 1) * limit;
        return this.postModel.find({ status: status }).skip(offset).limit(limit).exec();
    }

    async updatePost(postId: string, data: Partial<IPost>): Promise<IPost | null> {
        return this.postModel.findByIdAndUpdate(postId, data, { new: true }).exec();
    }

    async deletePost(postId: string): Promise<void> {
        await this.postModel.findByIdAndDelete(postId).exec();
    }
}