import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { QuizListInformationState } from '../../state/state';
import { Title } from '../../style/base/title';
import { QuizListInformationStateType } from '../../type/quizStateType';
import { Container, FlexContainer } from '../../style/base/layout';
import { QuizShowDescription } from '../../style/quiz/quizShow';
import { Button } from '../../style/base/button';

export const QuizDetailShow = () => {
    const location = useLocation();
    const quizId = location.pathname.split('/')[2];
    const quizDetails = useRecoilValue(QuizListInformationState);
    let quizInfo: QuizListInformationStateType = {
        creator: 'test',
        imageURL: 'a',
        description: 'test',
        title: 'test',
        quizId: 0,
    };
    quizDetails.map((quizDetail) => {
        if (quizDetail.quizId == Number(quizId)) {
            quizInfo = quizDetail;
        }
    });
    return (
        <Container
            style={{
                marginBottom: '1rem',
                width: '70%',
                padding: '2rem 15%',
            }}
        >
            <Title style={{ textAlign: 'center' }}>{quizInfo.title}</Title>
            <div style={{ height: '30%', width: '60%', margin: '0 20%' }}>
                <img alt={quizInfo.title + ' 이미지'} src={quizInfo.imageURL} />
            </div>
            <FlexContainer
                style={{
                    justifyContent: 'center',
                    width: '60%',
                    marginLeft: '20%',
                }}
            >
                <QuizShowDescription style={{ textAlign: 'center' }}>
                    {quizInfo.description}
                </QuizShowDescription>
                <QuizShowDescription
                    style={{
                        textAlign: 'center',
                        marginRight: '0',
                        marginLeft: 'auto',
                    }}
                >
                    만든사람 : {quizInfo.creator}
                </QuizShowDescription>
            </FlexContainer>
            <Link to={`/quiz/${quizInfo.quizId}/solve`}>
                <Button $WidthPercent={40} $Height="3rem">
                    퀴즈 풀기
                </Button>
            </Link>
        </Container>
    );
};
