import styled from 'styled-components';

export const Container = styled.div<{ $Padding?: string; $Margin?: string }>`
    margin: ${(props) => {
        return props.$Margin ? props.$Margin : '0';
    }};
    padding: ${(props) => {
        return props.$Padding ? props.$Padding : '0';
    }};
`;

export const FlexContainer = styled.div<{ $AlignItem?: string }>`
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    align-items: ${(props) => (props.$AlignItem ? props.$AlignItem : 'center')};
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2%;
    text-align: center;
`;
