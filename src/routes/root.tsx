import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../components/navbar/navbar';
import { MainPage } from './mainPage/mainPage';
import { Footer } from '../components/footer';

export const RootPage = (): JSX.Element => {
    const location = useLocation();
    const isRoot = location.pathname === '/';
    return (
        <>
            <NavBar></NavBar>
            <div>
                {isRoot ? (
                    <MainPage />
                ) : (
                    <div style={{ margin: '1rem' }}>
                        <Outlet></Outlet>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </>
    );
};
