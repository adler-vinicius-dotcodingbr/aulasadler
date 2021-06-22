const fontFamily = '"Roboto", sans-serif';

const fontSize = {
    default: 22,
};

const getFontWeight = (family: 'Roboto-Thin' | 'Roboto-Light' | 'Roboto-Regular' | 'Roboto-Bold' | 'Roboto-Black'): number => {
    if (family === 'Roboto-Thin') {
        return 100;
    }
    if (family === 'Roboto-Light') {
        return 300;
    }
    if (family === 'Roboto-Regular') {
        return 400;
    }
    if (family === 'Roboto-Bold') {
        return 700;
    }
    if (family === 'Roboto-Black') {
        return 900;
    }
    return 0;
};

export default {
    fontFamily,
    fontSize,
    getFontWeight,
};
