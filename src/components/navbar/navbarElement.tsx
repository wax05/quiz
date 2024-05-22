import { Link } from 'react-router-dom';
import { NavBarStyledcompnent } from '../../style/navbar/navbar';
import { navBarStateType } from '../../type/navBarStateType';

export const NabBarElement = ({ view, to }: navBarStateType) => {
    return (
        <>
            <Link to={to}>
                <NavBarStyledcompnent>{view}</NavBarStyledcompnent>
            </Link>
        </>
    );
};
