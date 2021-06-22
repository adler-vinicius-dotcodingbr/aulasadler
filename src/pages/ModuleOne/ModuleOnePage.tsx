/* eslint-disable max-len */
// libraries
import React, { useEffect, useState, useContext } from 'react';

// components (navigation)
import DrawerNavigation from '../../routes/DrawerNavigation/DrawerNavigation';
import ToNavigation from '../../routes/navigation';
import Research from '../../components/Research';

// js
import {
    Container,
    Header,
    Body,
    Footer,
    TextArea,
    ButtonNext,
    Home,
    ContainerLogin,
    InputOn,
    TextInput,
    ContainerAcess,
    NumberCharacters,
    TextScore,
    ButtonAdd,
    Result,
    Subtotal,
    Drop,
    Total,
    ContainerCalculator,
    TextTip,
    TextBalance,
    InputBalande,
    InputTip,
    TextPercentage,
    ContainerResult,
    ContainerResearch,
} from './ModuleOneStyles';

// contexts
import { AuthContext } from '../../context/AuthContext';

const ModuleOnePage: React.FC = () => {
    // useState
    const [redirect, setRedirect] = useState(false);
    const [pathRoute, setPathRoute] = useState('');
    const [idScreen, setIdScreen] = useState(1);
    const [score, setScore] = useState(0);
    const [textCounter, setTextCounter] = useState('');

    const [subtotal, setSubtotal] = useState(0);
    const [tip, setTip] = useState(10);

    // Calculadora
    const handleSubTotalInput = (e: { target: { value: string; }; }) => {
        setSubtotal(parseFloat(e.target.value));
    };
    const handleTipInput = (e: { target: { value: string; }; }) => {
        setTip(parseFloat(e.target.value));
    };

    // Contador de Caracteres
    const handleInput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextCounter(event.target.value);
    };

    // contexts
    const { user } = useContext(AuthContext);

    // useEffect
    useEffect(() => {
        if (!user.token && !localStorage.getItem('@Engequest:token')) {
            setRedirect(true);
            setPathRoute('/ModuleOne');
        }
    }, []);

    // Componente retornando uma própiedade
    function Name(text:string) {
        return (
            <>
                <TextArea>{text}</TextArea>
            </>
        );
    }
    // Componente de Contador básico
    function AddScore() {
        return (
            setScore(score + 1)
        );
    }
    function RemoveScore() {
        return (
            setScore(score - 1)
        );
    }

    useEffect(() => {
        if (score === 0) {
            document.title = 'Comece a contar!';
        } else {
            document.title = `contagem: ${score}`;
        }
    }, [score]);

    const RenderScreen = () => {
        if (idScreen === 1) {
            // Componente retornando uma própiedade
            return (
                <Home>
                    <ToNavigation redirect={redirect} pathRoute={pathRoute} />
                    <DrawerNavigation />
                    <Container>
                        <Header />
                        <Body>
                            <TextArea>{Name('tela 1')}</TextArea>
                        </Body>
                        <Footer>
                            <ButtonNext onClick={() => setIdScreen(2)}>Next</ButtonNext>
                        </Footer>
                    </Container>
                </Home>
            );
        }
        // useState e useEffect / Contador básico
        if (idScreen === 2) {
            return (
                <Home>
                    <Container>
                        <Body>
                            <TextArea>{Name('Tela 2')}</TextArea>
                        </Body>
                        <ButtonNext onClick={() => setIdScreen(3)}>Next</ButtonNext>
                        <ContainerLogin>
                            <ContainerAcess>
                                <TextScore>{score}</TextScore>
                                <ButtonAdd onClick={AddScore}>+1</ButtonAdd>
                                <ButtonAdd onClick={RemoveScore}>-1</ButtonAdd>
                            </ContainerAcess>
                        </ContainerLogin>
                        <Footer />
                    </Container>
                </Home>
            );
        }
        // Campos de Input/ Contador de Caracteres usando useState e Condicional de Exibição
        if (idScreen === 3) {
            return (
                <Home>
                    <Body>
                        <TextArea>{Name('Tela 3')}</TextArea>
                    </Body>
                    <ButtonNext onClick={() => setIdScreen(4)}>Next</ButtonNext>
                    <ContainerLogin>
                        <ContainerAcess>
                            <TextInput>Digite seu texto aqui, para contar os caracteres</TextInput>
                            <InputOn
                                value={textCounter}
                                onChange={handleInput}
                            />
                            {textCounter.length > 0
                                && <NumberCharacters>{textCounter.length}</NumberCharacters>}
                        </ContainerAcess>
                    </ContainerLogin>
                </Home>
            );
        }
        // Calculadora de Gorjeta
        if (idScreen === 4) {
            return (
                <Home>
                    <Body>
                        <TextArea>{Name('Tela 4')}</TextArea>
                    </Body>
                    <ButtonNext onClick={() => setIdScreen(5)}>Next</ButtonNext>
                    <ContainerCalculator>
                        <TextTip>Calculadora de Gorjeta</TextTip>
                        <TextBalance>Quanto deu sua conta?</TextBalance>
                        <InputBalande type="number" value={subtotal} onChange={handleSubTotalInput} />
                        <TextPercentage>Qual porcentagem de gorjeta?</TextPercentage>
                        <InputTip type="number" value={tip} onChange={handleTipInput} />
                        <ContainerResult>
                            {subtotal > 0 && (
                                <Result>
                                    <Subtotal>
                                        Sub-total: R$
                                        {subtotal}
                                    </Subtotal>
                                    <Drop>
                                        Gorjeta
                                        (
                                        {tip}
                                        )
                                        R$
                                        {(subtotal * tip) / 100}
                                    </Drop>
                                    <Total>
                                        Total: R$
                                        {subtotal + ((subtotal * tip) / 100)}
                                    </Total>
                                </Result>
                            )}
                        </ContainerResult>

                    </ContainerCalculator>
                </Home>
            );
        }
        // Separando em Componentes e utilizando em diversas tela com o codigo menor.
        if (idScreen === 5) {
            return (
                <Home>
                    <Body>
                        <TextArea>{Name('Tela 5')}</TextArea>
                    </Body>
                    <ButtonNext onClick={() => setIdScreen(1)}>Next</ButtonNext>
                    <ContainerResearch>
                        <Research />
                        <Research />
                        <Research />
                    </ContainerResearch>
                </Home>
            );
        }
        return null;
    };
    // main
    return (
        <div>
            {RenderScreen()}
        </div>
    );
};

export default ModuleOnePage;
