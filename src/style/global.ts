import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

export const SUIT_FONT_NAME: string = 'SUIT-Regular';
