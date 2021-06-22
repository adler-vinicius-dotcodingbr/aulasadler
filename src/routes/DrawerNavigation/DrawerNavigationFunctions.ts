// js
import colors from '../../styles/colors';

// functions
const ValidationBackgroundColorButton = (index: number): string => {
    if (document.URL.includes('/ModuleOnePage')) {
        if (index === 0) {
            return `${colors.basic.darkblue};`;
        }
        if (index === 1) {
            return `${colors.basic.blue}`;
        }
    }
    return `${colors.basic.white}`;
};

const ValidationColorText = (index: number): string => {
    if (document.URL.includes('/ModuleOnePage')) {
        if (index === 0) {
            return `${colors.basic.white}`;
        }
        if (index === 1) {
            return `${colors.basic.white}`;
        }
    }
    return `${colors.basic.black}`;
};

export {
    ValidationBackgroundColorButton,
    ValidationColorText,
};
