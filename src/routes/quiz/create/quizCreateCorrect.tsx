import { Container, FlexContainer } from '../../../style/base/layout';
import {
    QuizCreateDescription,
    QuizCreateInput,
} from '../../../style/quiz/quizCreate';

export const QuizCreateCorrect = () => {
    return (
        <>
            <Container
                style={{
                    border: 'solid black 1px',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    paddingLeft: '0',
                }}
            >
                <FlexContainer style={{ marginBottom: '1rem' }}>
                    <div style={{ width: '30%' }}>
                        <QuizCreateDescription style={{ width: '30%' }}>
                            퀴즈 배점
                        </QuizCreateDescription>
                        <QuizCreateInput
                            $Width="60%"
                            style={{ marginLeft: 'auto' }}
                        ></QuizCreateInput>
                    </div>
                    <QuizCreateDescription>퀴즈 내용</QuizCreateDescription>
                    <QuizCreateInput></QuizCreateInput>
                </FlexContainer>
                <FlexContainer>
                    {[1, 2, 3, 4].map((index) => {
                        return (
                            <>
                                <FlexContainer
                                    style={{ marginRight: '1rem' }}
                                    key={index}
                                >
                                    <span
                                        style={{
                                            width: '30%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {index}번
                                    </span>
                                    <QuizCreateInput></QuizCreateInput>
                                </FlexContainer>
                                <span style={{ marginRight: '1rem' }}>
                                    정답
                                </span>
                                <input
                                    name="correct"
                                    value="정답"
                                    type="radio"
                                ></input>
                            </>
                        );
                    })}
                </FlexContainer>
            </Container>
        </>
    );
};
