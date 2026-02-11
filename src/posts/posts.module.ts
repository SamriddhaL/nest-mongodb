import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, postsSchema } from 'src/schema/Posts.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Posts.name,
    schema: postsSchema
  }])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
