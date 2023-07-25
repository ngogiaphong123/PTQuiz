import { IsNotEmpty } from 'class-validator';

export class AnswerDetail {
    @IsNotEmpty({ message: 'ParticipantId can not be empty' })
    participantId: string;
    @IsNotEmpty({ message: 'AnswerOfUser can not be empty' })
    answerOfUser: Answer[];
}
export interface Answer {
    questionId: string;
    givenAnswers: boolean[];
    writtenAnswer: string;
}
