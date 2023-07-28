export type QuestionData = {
    userId: string;
    categoryId: string;
    title: string;
    options: OptionType;
    answers: AnswerType;
    written: string;
    image: string;
    type: number;
    createdAt: Date;
    updatedAt: Date;
};

export type AnswerType = {
    answerA: boolean;
    answerB: boolean;
    answerC: boolean;
    answerD: boolean;
};

export type OptionType = {
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
};
