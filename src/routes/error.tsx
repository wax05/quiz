import { Link } from 'react-router-dom';
import '../style/scss/error.scss';

export const ErrorPage = () => {
    return (
        <div className="container">
            <h1 className="title">Oops!</h1>
            <div className="link-wrap">
                <p className="ditail">
                    죄송합니다. 예상하지 못한 에러가 발생했습니다.
                </p>
                <Link to={'/'} className="link">
                    홈으로
                </Link>
            </div>
        </div>
    );
};
