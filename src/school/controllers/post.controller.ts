import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostSchema, UpdatePostSchema, ZodValidationPipe, type CreatePostData, type UpdatePostData } from '../../shared';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreatePostSchema))
  create(@Body() createPostData: CreatePostData) {
    const postData = {
      ...createPostData,
      autor: createPostData.autor as any,
    };
    return this.postService.create(postData as any);
  }

  @Get()
  findAll(@Query('limit') limit: string = '10', @Query('page') page: string = '1') {
    return this.postService.findAll(parseInt(limit, 10), parseInt(page, 10));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdatePostSchema))
  update(@Param('id') id: string, @Body() updatePostData: UpdatePostData) {
    const postData = {
      ...updatePostData,
      autor: updatePostData.autor as any,
    };
    return this.postService.update(id, postData as any);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}