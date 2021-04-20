import { HelloService } from './hello.service'
import { Controller, Post, Body, Get, Header, Query } from '@nestjs/common';
import { PersonDto } from './dto/person.dto'
import { ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';

@Controller('hello')
export class HelloController {
    constructor(
        private readonly helloService: HelloService,
    ) {}

    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Say Hello!!!'})
    @ApiResponse({ status: 400, description: 'Bad Request'})
    @Post('welcome')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{data : String}> {
        let msg = await this.helloService.welcome(personDto);
        return {data : msg};
    }

    @ApiResponse({ status: 200})
    @ApiQuery({
        name: 'name',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: "You can ignore it."
    })
    @Get('welcome')
    async sayWelcome2(@Query('name') iName, @Query('year') iYear):
            Promise<{data : String}> {
        let msg = await this.helloService.welcome({name: iName, year: iYear});
        return {data : msg};
    }
}
