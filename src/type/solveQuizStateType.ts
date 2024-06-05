export type AwnserStateType = {
    awnser: number;
};

export type ShuffledQuizChoicesState = {
    quizDescription: string;
    isCorrect: boolean;
};

export type ShuffledQuizStateType = {
    quizTitle: string;
    quizScore: number;
    quizChoices: ShuffledQuizChoicesState[];
};

export type ShuffledQuizDataStateType = {
    title: string;
    quizs: ShuffledQuizStateType[];
};

export type QuizData = {
    id: number;
    imageURL: string;
    title: string;
    description: string;
    creator: string;
    quizs: ShuffledQuizStateType[];
};
