import { Link } from 'react-router-dom';
import { QuizShowDescription } from '../../style/quiz/quizShow';
import { QuizData } from '../../type/solveQuizStateType';
import { useSetRecoilState } from 'recoil';
import { ShuffledQuizState } from '../../state/state';

type QuizListInformationStateProps = {
    quizInfo: QuizData;
};

export const QuizShow = ({ quizInfo }: QuizListInformationStateProps) => {
    const setQuiz = useSetRecoilState(ShuffledQuizState);
    const { id, imageURL, title, description, creator } = quizInfo;
    const onClickQuizSetHandler = () => {
        setQuiz(quizInfo);
    };
    return (
        <Link
            to={'/quiz/' + String(id) + '/solve'}
            style={{ color: 'black' }}
            onClick={onClickQuizSetHandler}
        >
            <div>
                <img
                    alt={title + ' 퀴즈 이미지'}
                    src={imageURL}
                    style={{ maxWidth: '100%' }}
                ></img>
                <h3 style={{ fontSize: '2rem', marginTop: '1rem' }}>{title}</h3>

                <QuizShowDescription $FontSize="1.3rem">
                    {description}
                </QuizShowDescription>
                <QuizShowDescription $FontSize="1.3rem">
                    만든사람 : {creator}
                </QuizShowDescription>
            </div>
        </Link>
    );
};
