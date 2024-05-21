import { Link } from 'react-router-dom';
import { NavBarStyledcompnent } from '../../styled/navbar';
import { navBarStateType } from '../../type/navBartype';

export const NabBarElement = ({ view, to }: navBarStateType) => {
    return (
        <>
            <Link to={to}>
                <NavBarStyledcompnent>{view}</NavBarStyledcompnent>
            </Link>
        </>
    );
};
