import styled from 'styled-components';

export const Title = styled.h1<{ $TitleSize?: string }>`
    font-size: ${(props) => (props.$TitleSize ? props.$TitleSize : 'auto')};
    margin-bottom: 1rem;
`;
