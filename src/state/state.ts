import { atom } from 'recoil';
import { navBarStateType } from '../type/navBarStateType';
import { QuizListInformationStateType } from '../type/quizStateType';

export const NavBarState = atom<navBarStateType[]>({
    key: 'navBarState',
    default: [
        { view: '메인페이지', to: '/' },
        { view: '퀴즈 탐색', to: 'quiz/' },
        { view: '퀴즈 만들기', to: 'quiz/create' },
    ],
});

export const QuizListInformationState = atom<QuizListInformationStateType[]>({
    key: 'quizListInformationState',
    default: [
        {
            quizId: 1,
            imageURL:
                'https://i.pinimg.com/736x/a0/ff/03/a0ff0372d6b88fe8b5c96127d69b4ec2.jpg',
            title: '고양이 퀴즈',
            description: '고양이 맞추기',
            creator: '개발자',
        },
        {
            quizId: 2,
            imageURL:
                'https://i.pinimg.com/736x/a0/ff/03/a0ff0372d6b88fe8b5c96127d69b4ec2.jpg',
            title: '고양이 퀴즈2',
            description: '고양이 맞추기',
            creator: '개발자',
        },
        {
            quizId: 3,
            imageURL:
                'https://i.pinimg.com/736x/a0/ff/03/a0ff0372d6b88fe8b5c96127d69b4ec2.jpg',
            title: '고양이 퀴즈3',
            description: '고양이 맞추기',
            creator: '개발자',
        },
        {
            quizId: 4,
            imageURL:
                'https://i.pinimg.com/736x/a0/ff/03/a0ff0372d6b88fe8b5c96127d69b4ec2.jpg',
            title: '고양이 퀴즈4',
            description: '고양이 맞추기',
            creator: '개발자',
        },
        {
            quizId: 5,
            imageURL:
                'https://i.pinimg.com/736x/a0/ff/03/a0ff0372d6b88fe8b5c96127d69b4ec2.jpg',
            title: '고양이 퀴즈5',
            description: '고양이 맞추기',
            creator: '개발자',
        },
        {
            quizId: 6,
            imageURL:
                'https://i.pinimg.com/736x/a0/ff/03/a0ff0372d6b88fe8b5c96127d69b4ec2.jpg',
            title: '고양이 퀴즈6',
            description: '고양이 맞추기',
            creator: '개발자',
        },
    ],
});
