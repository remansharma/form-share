import { Controller, Post, Body } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { PostsService } from './posts.service';
// import { Post as PostEntity } from './post.entity';
// import { PostDto } from './dto/post.dto';

import { FormsService } from './forms.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async createForm(@Body() form: any): Promise<any> {
    // get all posts in the db
    return await this.formsService.create(form);
  }
}
