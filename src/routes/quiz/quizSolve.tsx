import { useRecoilState } from 'recoil';
import { FlexContainer } from '../../style/base/layout';
import { MarginDiv } from '../../style/base/margin';
import '../../style/scss/flex.scss';
import '../../style/scss/quizSolve.scss';
import { AwnserState, ShuffledQuizState } from '../../state/state';
import { useNavigate } from 'react-router-dom';
import { shuffle } from '../../func/shuffle';
import { useEffect } from 'react';

export const QuizSolve = () => {
    const navigate = useNavigate();
    const [awnsers, setAwnser] = useRecoilState(AwnserState);
    const [shuffledQuizs, setShuffledQuizs] = useRecoilState(ShuffledQuizState);

    useEffect(() => {
        const tempQuiz = JSON.parse(JSON.stringify(shuffledQuizs));
        tempQuiz.quizs = shuffle(tempQuiz.quizs).slice(0, 5);
        setShuffledQuizs(tempQuiz);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //on mount run this callback function

    const onChangeAwnser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const awnserIndex = event.currentTarget.dataset.quizchoiceawnser;
        const quizIndex = event.currentTarget.dataset.quizindex;
        const tempAwnser = [...awnsers];
        tempAwnser[Number(quizIndex)] = { awnser: Number(awnserIndex) };
        setAwnser(tempAwnser);
    };

    const submitAwnser = (): void => {
        const noInputQuizs: number[] = [];
        awnsers.map((awnser, idx) => {
            if (awnser.awnser == -1) {
                noInputQuizs.push(idx + 1);
            }
        });
        if (noInputQuizs.length > 0) {
            window.alert(
                `${noInputQuizs.map((idx) => {
                    return idx;
                })}번 문제의 답이 없습니다.\n답을 입력해주세요`,
            );
            return;
        }
        navigate('/result');
    };

    return (
        <>
            <h1>{shuffledQuizs.title}</h1>
            <br />
            {shuffledQuizs.quizs.map((quiz, idx) => {
                return (
                    <MarginDiv
                        key={idx}
                        $Bottom="1rem"
                        style={{ padding: '1rem' }}
                    >
                        <FlexContainer style={{ marginBottom: '2rem' }}>
                            <h2>
                                {idx + 1} : {quiz.quizTitle}
                            </h2>
                            <h2 className="flex-right">{quiz.quizScore}점</h2>
                        </FlexContainer>
                        <FlexContainer>
                            {quiz.quizChoices.map((choice, choiceIdx) => {
                                return (
                                    <label
                                        className="quiz-choice"
                                        key={choice.quizDescription}
                                    >
                                        <div>
                                            <b>{choice.quizDescription}</b>
                                            <br />
                                            <input
                                                type="radio"
                                                name={String(idx)}
                                                value={choiceIdx}
                                                data-quizindex={idx}
                                                data-quizchoiceawnser={
                                                    choiceIdx
                                                }
                                                onChange={onChangeAwnser}
                                            ></input>
                                        </div>
                                    </label>
                                );
                            })}
                        </FlexContainer>
                    </MarginDiv>
                );
            })}
            <input
                type="button"
                value="제출"
                onClick={submitAwnser}
                className="submit-btn"
            />
        </>
    );
};
