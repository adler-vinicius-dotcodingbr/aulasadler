/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import {
    InputShare,
    Home,
    ContainerLogin,
} from './LoginPageStyles';

function Research(props: { onChangeText: (arg0: string) => void; }) {
    const [text, setText] = useState('');

    function inputTextChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setText(e.target.value);
    }

    useEffect(() => {
        props.onChangeText(text);
    }, [text]);

    return (
        <Home>
            <ContainerLogin>
                <InputShare
                    value={text}
                    placeholder="Digite aqui o seu Texto"
                    onChange={inputTextChange}
                />
            </ContainerLogin>
        </Home>
    );
}
export default Research;
