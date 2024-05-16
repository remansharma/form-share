import { Controller, Body, Post } from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class catController {
    constructor(private catService: CatsService)

    @Post('signup')
    async createCat(@Body() cat: CatDto) {
        return await this.catService.create(cat);
    }

}