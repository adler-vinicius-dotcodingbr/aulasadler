import React from 'react';
import styled from 'styled-components';

// Styles
export const InputShare = styled.input`
    width: 200px;
    display: flex;
    height: 30px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 5px;
    margin-top: 10px;
    margin-left: 24%;
    font-size: 10px;
    color: black;

`;

const Research: React.FC = () => (
    <InputShare />
);
export default Research;
