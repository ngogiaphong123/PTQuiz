import { IsNotEmpty, IsNumber, IsOptional, ValidateIf } from 'class-validator';

export class QuestionDto {
    @IsNotEmpty({ message: 'Categories can not be empty' })
    categoryId: string;

    @IsNotEmpty({ message: 'Title can not be empty' })
    title: string;

    @ValidateIf((o) => o.type === 0 || o.type === 1 || o.type === 3)
    @IsNotEmpty({ message: 'Options A can not be empty' })
    optionA: string;

    @ValidateIf((o) => o.type === 0 || o.type === 1 || o.type === 3)
    @IsNotEmpty({ message: 'Options B can not be empty' })
    optionB: string;

    @ValidateIf((o) => o.type === 0 || o.type === 1)
    @IsNotEmpty({ message: 'Options C can not be empty' })
    optionC: string;

    @ValidateIf((o) => o.type === 0 || o.type === 1)
    @IsNotEmpty({ message: 'Options D can not be empty' })
    optionD: string;

    @ValidateIf((o) => o.type === 0 || o.type === 1 || o.type === 3)
    @IsNotEmpty({ message: 'Answer A can not be empty' })
    answerA: boolean;

    @ValidateIf((o) => o.type === 0 || o.type === 1 || o.type === 3)
    @IsNotEmpty({ message: 'Answer B can not be empty' })
    answerB: boolean;

    @ValidateIf((o) => o.type === 0 || o.type === 1)
    @IsNotEmpty({ message: 'Answer C can not be empty' })
    answerC: boolean;

    @ValidateIf((o) => o.type === 0 || o.type === 1)
    @IsNotEmpty({ message: 'Answer D can not be empty' })
    answerD: boolean;

    @ValidateIf((o) => o.type === 2)
    @IsNotEmpty({ message: 'Written can not be empty' })
    written: string;

    @IsOptional()
    image: string;

    @IsNotEmpty({ message: 'Type can not be empty' })
    type: number;

    @IsOptional()
    @IsNumber()
    time: number;
}
