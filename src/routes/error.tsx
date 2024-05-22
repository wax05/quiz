import { Link } from 'react-router-dom';
import { ErrorContainer } from '../style/error';
import { Title } from '../style/base/title';

export const ErrorPage = () => {
    return (
        <ErrorContainer>
            <Title $TitleSize="4em">Oops!</Title>
            <div style={{ marginBottom: '1em' }}>
                <p>죄송합니다. 예상하지 못한 에러가 발생했습니다.</p>
            </div>
            <Link to={'/'} style={{ color: 'black', fontSize: '1.5rem' }}>
                홈으로
            </Link>
        </ErrorContainer>
    );
};
