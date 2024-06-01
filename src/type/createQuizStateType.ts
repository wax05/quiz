export type quizCorrectChoiceStateType = {
    correctId: number;
    description: string;
};

export type CreateQuizDetailStateType = {
    quizDetailId: number;
    quizCorrectChoice: quizCorrectChoiceStateType[];
};

export type CreateQuizStateType = {
    quizName: string;
    quizDescription: string;
    quizInfomation: CreateQuizDetailStateType[];
};

export type QuizChoiceDetailStateType = {
    title: string;
    isCorrect: boolean;
};

export type QuizChoiceStateType = {
    quiz2: QuizChoiceDetailStateType;
    quiz1: QuizChoiceDetailStateType;
    quiz3: QuizChoiceDetailStateType;
    quiz4: QuizChoiceDetailStateType;
};

export type Quizs = {
    key: string;
};

export type CreatedQuizsStateType = {
    value: Quizs[];
};
