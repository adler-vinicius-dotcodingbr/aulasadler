// libraries
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// js
import GlobalStyle from './styles/global';
import Routes from './routes';

// contexts
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AuthProvider>
        <GlobalStyle />
    </>
);

export default App;
