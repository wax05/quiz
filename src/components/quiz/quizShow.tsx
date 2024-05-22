import { Link } from 'react-router-dom';
import { QuizListInformationStateType } from '../../type/quizStateType';
import { QuizShowDescription } from '../../style/quiz/quizShow';

type QuizListInformationStateProps = {
    quizInfo: QuizListInformationStateType;
};

export const QuizShow = ({ quizInfo }: QuizListInformationStateProps) => {
    const { quizId, imageURL, title, description, creator } = quizInfo;
    return (
        <Link to={'/quiz/' + String(quizId)} style={{ color: 'black' }}>
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
