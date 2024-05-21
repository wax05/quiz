import { Link } from 'react-router-dom';
import { ErrorContainer } from '../style/error';
import { Title } from '../style/base/title';

export const ErrorPage = () => {
    return (
        <ErrorContainer>
            <Title $TitleSize="4em">Oops!</Title>
            <div>
                <p>죄송합니다. 예상하지 못한 에러가 발생했습니다.</p>
                <Link to={'/'}>홈으로</Link>
            </div>
        </ErrorContainer>
    );
};
