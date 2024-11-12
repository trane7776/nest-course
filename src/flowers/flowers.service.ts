import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly configService: ConfigService
    ) {}

    findAll() {
        console.log(this.configService.get<EnumAppMode>('MODE'));
        return this.prisma.flower.findMany();
        // return [
        //     {
        //         name: 'Rose',
        //         color: 'red',
        //         price: 10,
        //     },
        //     {
        //         name: 'Tulip',
        //         color: 'yellow',
        //         price: 20,
        //     },
        //     {
        //         name: 'Orchid',
        //         color: 'purple',
        //         price: 30,
        //     },
        // ];
    }

    create(dto: CreateFlowersDto) {
        return this.prisma.flower.create({
            data: dto,
        });
    }
}
