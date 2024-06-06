import { useRecoilValue } from 'recoil';
import { AwnserState, ShuffledQuizState } from '../../state/state';
import { MarginDiv } from '../../style/base/margin';
import { FlexContainer } from '../../style/base/layout';
import '../../style/scss/result.scss';
import '../../style/scss/flex.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../style/base/button';
import { ShuffledQuizStateType } from '../../type/solveQuizStateType';

export const QuizResult = () => {
    type WrongQuiz = ShuffledQuizStateType & {
        id: number;
    };

    const navigate = useNavigate();
    const awnsers = useRecoilValue(AwnserState);
    const shuffledQuizs = useRecoilValue(ShuffledQuizState);
    let maxScore = 0;
    let score = 0;
    let count = 0;
    const wrongQuizs: WrongQuiz[] = [];

    if (shuffledQuizs == undefined) {
        throw new Error('QuizNotSolved');
    }

    shuffledQuizs.quizs.slice(0, 5).map((quiz) => {
        maxScore += quiz.quizScore;
    });

    shuffledQuizs.quizs.slice(0, 5).map((quiz, quizIndex) => {
        quiz.quizChoices.map((choice, idx) => {
            if (choice.isCorrect) {
                if (awnsers[quizIndex].awnser == idx) {
                    score += quiz.quizScore;
                    count++;
                } else {
                    const tempWrongQuiz: WrongQuiz = {
                        ...quiz,
                        id: quizIndex + 1,
                    };
                    wrongQuizs.push(tempWrongQuiz);
                }
            }
        });
    });

    const previousPage = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="result-container">
                <h1>결과</h1>
                <MarginDiv $Bottom="2rem">
                    <h2>정답률 : {(count / 5) * 100}%</h2>
                    <FlexContainer>
                        <div className="flex-left">0</div>
                        <div className="flex-right">100</div>
                    </FlexContainer>
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'rgb(184, 184, 184)',
                            borderRadius: '1rem',
                        }}
                    >
                        <div
                            style={{ width: `${(count / 5) * 100}%` }}
                            className="percent-bar"
                        ></div>
                    </div>
                </MarginDiv>
                <MarginDiv $Bottom="2rem">
                    <h2>
                        총 점수 : {score}/{maxScore}
                    </h2>
                    <FlexContainer>
                        <div className="flex-left">0</div>
                        <div className="flex-right">{maxScore}</div>
                    </FlexContainer>
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: 'rgb(184, 184, 184)',
                            borderRadius: '1rem',
                        }}
                    >
                        <div
                            style={{ width: `${(score / maxScore) * 100}%` }}
                            className="percent-bar"
                        ></div>
                    </div>
                </MarginDiv>
                <MarginDiv $Bottom="2rem">
                    {wrongQuizs.length != 0 ? (
                        <>
                            <b>틀린 퀴즈</b>
                            {wrongQuizs.map((wrongQuiz) => {
                                return (
                                    <div key={wrongQuiz.id}>
                                        {wrongQuiz.id}번퀴즈 :{' '}
                                        {wrongQuiz.quizTitle}
                                    </div>
                                );
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </MarginDiv>
                <MarginDiv $Bottom="2rem">
                    <Button style={{ padding: '2rem' }} onClick={previousPage}>
                        ReTry Quiz
                    </Button>
                </MarginDiv>
                <FlexContainer>
                    <Link to="/" className="link-button">
                        <Button>메인 페이지로</Button>
                    </Link>
                    <Link to="/quiz/" className="link-button">
                        <Button style={{ padding: '2rem' }}>
                            퀴즈 찾기 페이지로
                        </Button>
                    </Link>
                </FlexContainer>
            </div>
        </>
    );
};
