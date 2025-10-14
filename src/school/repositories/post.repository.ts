import { IPost } from 'src/school/schemas/models/post.interface';

export abstract class PostRepository {
  abstract createPost(post: IPost): Promise<IPost>;
  abstract getPostById(postId: string): Promise<IPost | null>;
  abstract getAllPosts(limit: number, page: number): Promise<IPost[]>;
  abstract getPostsByDocente(
    docenteId: string,
    limit: number,
    page: number,
  ): Promise<IPost[]>;
  abstract getPostsByStatus(
    status: 'publicado' | 'rascunho',
    limit: number,
    page: number,
  ): Promise<IPost[]>;
  abstract updatePost(
    postId: string,
    data: Partial<IPost>,
  ): Promise<IPost | null>;
  abstract deletePost(postId: string): Promise<void>;
}
