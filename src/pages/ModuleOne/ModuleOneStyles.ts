// libraries
import styled from 'styled-components';

// colors
import colors from '../../styles/colors';

export const Home = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    min-width: 100vw;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    align-items: center;
`;

export const Body = styled.div`
    background-color: white;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 30px;
`;

export const TextArea = styled.text`
    color: black;
`;

export const Header = styled.div``;

export const Footer = styled.div`
    display: flex;
`;

export const ButtonExchange = styled.button`
    width: 100px;
    height: 30px;
    margin-left: 20px;
    border: none;
    border-radius: 20px;
    background-color: ${colors.basic.black};
`;

export const ButtonNext = styled.button`
    width: 200px;
    height: 30px;
    border: 1px solid;
    border-radius: 30px;
    margin-left: 5px;
    background-color: orange;
    cursor: pointer;
`;
export const ContainerArea = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-left: 30%;
    background-color: pink;
    border-radius: 20px;
`;

export const ContainerLogin = styled.div`
    width: 400px;
    height: 400px;
    margin-left: 30%;
    background-color: powderblue;
    border-radius: 20px;
    justify-content: center;
    display: flex;
`;

export const TextInput = styled.h4`
    font-size: 18px;
    color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const InputOn = styled.textarea`
    width: 100%;
    height: 200px;
    color: black;
`;

export const PasswordInput = styled.input`
    width: 200px;
    height: 20px;
`;

export const NumberCharacters = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-size: 50px;
    color: purple;
`;

export const TextScore = styled.text`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-size: 50px;
    color: purple;
`;

export const ButtonAdd = styled.button`
    width: 200px;
    height: 30px;
    border: 1px solid;
    border-radius: 30px;
    margin-left: 100px;
    background-color: orange;
`;

export const Result = styled.div``;

export const Subtotal = styled.h4``;

export const Drop = styled.h4``;

export const Total = styled.h1``;

export const ContainerCalculator = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 20px;
    margin-left: 30%;
    background-color: powderblue;
`;

export const ContainerAcess = styled.div``;

export const TextTip = styled.h1`
    color:purple;
    margin-left: 30px;
`;

export const TextBalance = styled.h2`
    color:purple;
    margin-left: 10px;
    margin-top: 10px;
`;

export const InputBalande = styled.input`
    margin-left: 10px;
    width: 80%;
    color: black;
    border: solid 1px black;
    border-radius: 10px;
    padding: 2px;
`;

export const InputTip = styled.input`
    margin-left: 10px;
    width: 80%;
    color: black;
    border: solid 1px black ;
    border-radius: 10px;
    padding: 2px;
`;

export const TextPercentage = styled.h2`
    color:purple;
    margin-left: 10px;
    margin-top: 10px;
`;

export const ContainerResult = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    opacity: 0.5;
    align-items: center;
    margin-top: 10px;
    margin-left: 10%;
    border-radius: 50px;
    justify-content: center;
    background-color: black;
`;

export const ContainerResearch = styled.div`
    width: 400px;
    height: 400px;
    margin-left: 30%;
    background-color: powderblue;
    border-radius: 20px;
`;

export const TextValue = styled.text`
    color: #483D8B;
`;
