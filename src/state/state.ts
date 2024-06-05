import { atom } from 'recoil';
import { navBarStateType } from '../type/navBarStateType';
import { QuizListInformationStateType } from '../type/quizStateType';
import dummyData from '../data/dummyQuizData.json';
import AllData from '../data/quizs.json';
import {
    CreateQuizStateType,
    CreatedQuizsStateType,
} from '../type/createQuizStateType';
import {
    AwnserStateType,
    QuizData,
    ShuffledQuizDataStateType,
} from '../type/solveQuizStateType';

export const NavBarState = atom<navBarStateType[]>({
    key: 'navBarState',
    default: [
        { view: '메인페이지', to: '/' },
        { view: '퀴즈 탐색', to: 'quiz/' },
        { view: '퀴즈 만들기', to: 'quiz/create' },
    ],
});

export const QuizListInformationState = atom<QuizData[]>({
    key: 'quizListInformationState',
    default: AllData,
});

export const NowSolveQuiz = atom<QuizListInformationStateType>({
    key: 'nowSolveQuiz',
    default: undefined,
});

export const CreateQuizState = atom<CreateQuizStateType>({
    key: 'CreateQuizState',
    default: undefined,
});

export const CreatedQuizs = atom<CreatedQuizsStateType>({
    key: 'createdQuizs',
    default: undefined,
});

export const AwnserState = atom<AwnserStateType[]>({
    key: 'Awnser',
    default: [
        {
            awnser: -1,
        },
        {
            awnser: -1,
        },
        {
            awnser: -1,
        },
        {
            awnser: -1,
        },
        {
            awnser: -1,
        },
    ],
});

export const ShuffledQuizState = atom<ShuffledQuizDataStateType>({
    key: 'ShuffledQuizState',
    default: dummyData,
});

export const userScoreState = atom<number>({ key: 'userScore', default: 0 });
export const userCorrectCountState = atom<number>({
    key: 'userCorrectCount',
    default: 0,
});
