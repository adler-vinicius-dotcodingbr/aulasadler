// libraries
import { createGlobalStyle } from 'styled-components';

// js
import colors from './colors';
import consts from '../utils/consts';

// style
const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${colors.basic.white};
        -webkit-font-smoothing: antialiased;
        max-width: 100%;
        overflow-x: hidden;
    }
    body, input, button {
        font-size: ${consts.fontSize.default};
        font-family: ${consts.fontFamily};
        font-weight: ${consts.getFontWeight('Roboto-Regular')};
        color: ${colors.basic.white};
    }
    #root {
        margin: 0 auto;
    }
`;

export default globalStyle;
