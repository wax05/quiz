import { useRecoilState } from 'recoil';
import { FlexContainer } from '../../../style/base/layout';
import { MarginDiv } from '../../../style/base/margin';
import { Title } from '../../../style/base/title';
import {
    QuizCreateDescription,
    QuizCreateInput,
} from '../../../style/quiz/quizCreate';
import { CreatedQuizs as CreatedQuizsState } from '../../../state/state';

export const QuizCreate = () => {
    const [createdQuiz, setCreatedQuiz] = useRecoilState(CreatedQuizsState);

    const onChangeSet = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.name);
    };

    return (
        <>
            <MarginDiv $Bottom="1rem">
                <h1>퀴즈 만들기</h1>
                <br />
                <FlexContainer
                    style={{ justifyItems: 'center', marginBottom: '1rem' }}
                >
                    <QuizCreateDescription>퀴즈 이름</QuizCreateDescription>
                    <QuizCreateInput
                        type="text"
                        name="quiz-name"
                        placeholder="퀴즈 이름"
                        style={{ marginRight: '1rem' }}
                        onChange={onChangeSet}
                    ></QuizCreateInput>
                </FlexContainer>
                <FlexContainer style={{ justifyItems: 'center' }}>
                    <QuizCreateDescription>퀴즈 설명</QuizCreateDescription>
                    <QuizCreateInput
                        type="text"
                        name="quiz-name"
                        placeholder="퀴즈 설명"
                        style={{ marginRight: '1rem' }}
                    ></QuizCreateInput>
                </FlexContainer>
            </MarginDiv>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => {
                return (
                    <MarginDiv key={idx}>
                        <Title>{idx}번 문제</Title>
                        <FlexContainer
                            style={{
                                justifyItems: 'center',
                                marginBottom: '1rem',
                            }}
                        >
                            <QuizCreateDescription>
                                퀴즈 제목
                            </QuizCreateDescription>
                            <QuizCreateInput
                                type="text"
                                name="quiz-title"
                                placeholder="퀴즈 제목"
                                style={{ marginRight: '1rem' }}
                            ></QuizCreateInput>
                        </FlexContainer>
                        <FlexContainer
                            style={{
                                justifyItems: 'center',
                                marginBottom: '1rem',
                            }}
                        >
                            <QuizCreateDescription>
                                퀴즈 배점
                            </QuizCreateDescription>
                            <QuizCreateInput
                                type="text"
                                name="quiz-score"
                                placeholder="퀴즈 배점"
                                style={{ marginRight: '1rem' }}
                            ></QuizCreateInput>
                        </FlexContainer>
                        <FlexContainer style={{ justifyContent: 'center' }}>
                            {[1, 2, 3, 4].map((currentIndex) => {
                                return (
                                    <label
                                        htmlFor={'correct' + String(idx)}
                                        key={currentIndex}
                                    >
                                        <div style={{ margin: '0 2rem' }}>
                                            {currentIndex}번
                                            <input
                                                type="radio"
                                                name={'correct' + String(idx)}
                                                value={idx}
                                            />
                                        </div>
                                    </label>
                                );
                            })}
                        </FlexContainer>
                    </MarginDiv>
                );
            })}
        </>
    );
};
