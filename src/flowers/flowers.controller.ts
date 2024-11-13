//import { AuthGuard } from './../conception/guard';
import {
    Body,
    Controller,
    Get,
    Post,
    // UseGuards,
    //UseInterceptors,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
//import { LoggingInterceptor } from 'src/conception/interceptor';
import { CreateFlowersDto } from './flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('flowers')
export class FlowersController {
    constructor(private readonly flowersService: FlowersService) {}

    @Get()
    //@UseInterceptors(LoggingInterceptor)
    //@UseGuards(AuthGuard)
    @ApiResponse({
        status: 200,
        description: 'The found record',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiBody({ type: CreateFlowersDto, description: 'Get flowers' })
    findAll() {
        return this.flowersService.findAll();
    }

    @Post()
    //@UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiBody({ type: CreateFlowersDto, description: 'Create flowers' })
    create(@Body() dto: CreateFlowersDto) {
        return this.flowersService.create(dto);
    }
}
