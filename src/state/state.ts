import { atom } from 'recoil';
import { navBarStateType } from '../type/navBartype';

export const NavBarState = atom<navBarStateType[]>({
    key: 'navBarState',
    default: [
        { view: '메인페이지', to: '/' },
        { view: '퀴즈 탐색', to: 'quiz/' },
        { view: '퀴즈 만들기', to: 'quiz/create' },
    ],
});
