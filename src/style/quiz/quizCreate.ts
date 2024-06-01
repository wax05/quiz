import styled from 'styled-components';

export const QuizCreateDescription = styled.div`
    display: inline-block;
    font-size: large;
    margin-right: 0.5rem;
    text-align: center;
    width: 10%;
`;

export const QuizCreateInput = styled.input<{ $Width?: string }>`
    font-size: large;
    width: ${(props) => {
        return props.$Width ? props.$Width : '100%';
    }};
`;
