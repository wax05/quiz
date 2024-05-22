import { useRecoilValue } from 'recoil';
import { NavBarState } from '../../state/state';
import { NabBarElement } from './navbarElement';
import { FlexContainer } from '../../style/base/layout';
import './navbar.css';
import '../../style/base.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to="/" className="logo">
                Quiz
            </Link>
        </>
    );
};

export const NavBar = () => {
    const navBarState = useRecoilValue(NavBarState);

    return (
        <nav>
            <FlexContainer>
                <Logo />
                {navBarState.map((state) => {
                    return (
                        <NabBarElement
                            key={state.view}
                            view={state.view}
                            to={state.to}
                        ></NabBarElement>
                    );
                })}
            </FlexContainer>
        </nav>
    );
};
