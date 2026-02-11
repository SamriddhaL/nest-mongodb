import { Body, Controller, Get, Post } from '@nestjs/common';
import { createPostsDto } from './dto/createPosts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService){}
    @Post()
    createPost(@Body() createPostDto : createPostsDto){
        return this.postService.createPost(createPostDto)
    }

    @Get()
    getPosts(){
        return this.postService.getPost()
    }

}
