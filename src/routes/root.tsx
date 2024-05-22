import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../components/navbar/navbar';
import { MainPage } from './mainPage/mainPage';

export const RootPage = (): JSX.Element => {
    const location = useLocation();
    const isRoot = location.pathname === '/';
    return (
        <>
            <NavBar></NavBar>
            <div>{isRoot ? <MainPage /> : <Outlet></Outlet>}</div>
        </>
    );
};
