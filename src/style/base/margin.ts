import styled from 'styled-components';

export const MarginDiv = styled.div<{
    $Top?: string;
    $Bottom?: string;
    $Left?: string;
    $Right?: string;
}>`
    margin-top: ${(props) => {
        return props.$Top ? props.$Top : 'auto';
    }};
    margin-bottom: ${(props) => {
        return props.$Bottom ? props.$Bottom : 'auto';
    }};
    margin-left: ${(props) => {
        return props.$Left ? props.$Left : 'auto';
    }};
    margin-right: ${(props) => {
        return props.$Right ? props.$Right : 'auto';
    }};
`;
