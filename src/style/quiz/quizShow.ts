import styled from 'styled-components';

export const QuizShowDescription = styled.p<{
    $FontSize?: string;
    $Color?: string;
}>`
    font-size: ${(props) => {
        return props.$FontSize ? props.$FontSize : '1rem';
    }};
    color: ${(props) => {
        return props.$Color ? props.$Color : 'black';
    }};
`;
