import { useRecoilValue } from 'recoil';
import { NavBarState } from '../../state/state';
import { NabBarElement } from './navbarElement';

export const NavBar = () => {
    const navBarState = useRecoilValue(NavBarState);

    return (
        <nav>
            {navBarState.map((state) => {
                return (
                    <NabBarElement
                        view={state.view}
                        to={state.to}
                    ></NabBarElement>
                );
            })}
        </nav>
    );
};
