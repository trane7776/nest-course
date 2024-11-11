import { IsString, IsNumber } from 'class-validator';
export class CreateFlowersDto {
    @IsString({
        message: 'Name must be a string',
    })
    name: string;

    @IsString()
    color: string;

    @IsNumber()
    price: number;
}

export type TUpdateFlowersDto = Partial<CreateFlowersDto>;
