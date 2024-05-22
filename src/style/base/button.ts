import styled from 'styled-components';

export const Button = styled.div<{ $WidthPercent: number; $Height: string }>`
    width: ${(props) => {
        return props.$WidthPercent ? props.$WidthPercent : 'auto';
    }};
    height: ${(props) => {
        return props.$Height ? props.$Height : 'auto';
    }};
    margin: 0
        ${(props) => {
            return props.$WidthPercent ? props.$WidthPercent / 2 + '%' : '0';
        }};
    border-radius: 10px;
    background-color: #87ceeb;
    text-align: center;
    :hover {
        transition-duration: 0.3s;
        background-color: #6ca5bc;
    }
`;
