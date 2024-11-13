import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class CreateFlowersDto {
    @IsString({
        message: 'Name must be a string',
    })
    @ApiProperty({
        example: 'Роза',
        description: 'Название цветка',
        required: true,
    })
    name: string;

    @IsString()
    @ApiProperty({
        example: 'Красный',
        description: 'Цвет цветка',
        required: true,
    })
    color: string;

    @IsNumber()
    @ApiProperty({
        example: 100,
        description: 'Цена цветка',
        required: true,
    })
    price: number;
}

export type TUpdateFlowersDto = Partial<CreateFlowersDto>;
