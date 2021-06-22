// libraries
import styled from 'styled-components';

// colors
import colors from '../../styles/colors';

// functions
import {
    ValidationBackgroundColorButton,
    ValidationColorText,
} from './DrawerNavigationFunctions';

// interfaces
interface ButtonActionDrawerOptionInterface {
    index: number,
}

interface DrawerOptionInterface {
    index: number,
}

export const Container = styled.div`
    background-color: ${colors.basic.white};
    display: grid;
    width: 380px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20vh 70vh 10vh;
    grid-template-areas:"Header Main" "Aside Aside" "Footer Footer";
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;
export const Main = styled.div`
    grid-area: Main;
`;

export const Aside = styled.div`
    grid-area: Aside;
`;

export const Footer = styled.div`
    grid-area: Footer;
`;

export const Logout = styled.h4`
    color: ${colors.basic.white};
    cursor: pointer;
`;

export const ImgEngequest = styled.img`
    width: 60px;
    margin-left: 4vh;
    margin-bottom: 4vh;
`;

export const NameUser = styled.h4`
    color: #74F4D6;
    margin-left: 50px;
`;

export const ImgExit = styled.img`
    width: 20px;
    margin-left: 10px;
    cursor: pointer;
`;

export const Line = styled.div`
    background-color: ${colors.basic.darkerblue};
    width: 350px;
    height: 4px;
    display: flex;
    justify-content: center;
    margin-left: 12px;
`;

export const TextFooter = styled.h4`
    color: ${colors.basic.white};
    display: flex;
    justify-content: center;
    margin-top: 4vh;
`;

export const ListItem = styled.div<ButtonActionDrawerOptionInterface>`
    align-items: center;
    background-color: ${(props) => ValidationBackgroundColorButton(props.index)};
    border-radius: 5px;
    border-width: 0px;
    cursor: pointer;
    display: flex;
    height: 40px;
    margin-top: 10px;
    margin-left: 24px;
    transition: all ease .4s;
    padding: 10px;
    width: 290px;
    :hover {
        background-color: ${colors.basic.blue};
    }
`;

export const DrawerOption = styled.div<DrawerOptionInterface>`
    color: ${(props) => ValidationColorText(props.index)};
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
`;
export const ContainerExit = styled.div`
    max-width: 30%;
    display: flex;
    margin-top: 20px;
    margin-left: 116px;
`;
export const ContainerImage = styled.img`
    background-color: ${colors.basic.blue};
    width: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
`;

export const HomeImage = styled.img`
    margin-right: 20px;
    width: 24px;
`;

export const ImgArrow = styled.img`
    position: absolute;
    right: 30px;
`;

export const ButtonEnter = styled.button`
    cursor: pointer;
    position: absolute;
`;
