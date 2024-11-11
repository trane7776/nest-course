import { AuthGuard } from './../conception/guard';
import {
    Body,
    Controller,
    Get,
    Post,
    Query,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { ParseIntPipe } from 'src/conception/pipe';
import { CreateFlowersDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
    constructor(private readonly flowersService: FlowersService) {}

    @Get()
    @UseGuards(AuthGuard)
    findAll(@Query('pathName', ParseIntPipe) pathName: string) {
        console.log(pathName);
        return this.flowersService.findAll();
    }

    @Post()
    @UseGuards(AuthGuard)
    create(@Body() dto: CreateFlowersDto) {
        return this.flowersService.create(dto);
    }
}
