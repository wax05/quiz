import { GridContainer } from '../../style/base/layout';
import { QuizListInformationState } from '../../state/state';
import { useRecoilValue } from 'recoil';
import { QuizShow } from '../../components/quiz/quizShow';
export const QuizList = () => {
    const QuizListInformation = useRecoilValue(QuizListInformationState);
    return (
        <GridContainer>
            {QuizListInformation.map((info) => {
                return <QuizShow quizInfo={info} key={info.quizId} />;
            })}
        </GridContainer>
    );
};
