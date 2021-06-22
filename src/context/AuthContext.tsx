// libraries
import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

// interfaces
interface AuthState {
    token: string;
    tokenRefresh: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface RecoveryCredentials {
    email: string;
}

interface AuthContextInterface {
    user: AuthState;
    signIn(credentials: SignInCredentials): Promise<boolean>;
    recoveryPassword(credentials: RecoveryCredentials): Promise<void>;
    logout(): void;
}

// context
export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);
export const AuthProvider: React.FC = ({ children }) => {
    const [dataAuth, setDataAuth] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Engequest:token');
        const tokenRefresh = localStorage.getItem('@Engequest:tokenRefresh');
        if (token && tokenRefresh) {
            return {
                token,
                tokenRefresh,
            };
        }
        return {} as AuthState;
    });

    const logout = useCallback(() => {
        localStorage.removeItem('@Engequest:token');
        localStorage.removeItem('@Engequest:tokenRefresh');
        setDataAuth({} as AuthState);
    }, []);

    const signIn = useCallback(async ({ email, password }) => {
        const isDev = process.env.NODE_ENV !== 'production';
        const baseURL = isDev ? 'http://localhost:3333' : 'https://engequest-staging.herokuapp.com';
        const body = JSON.stringify({ email, password });
        const configRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        };
        const response = await fetch(`${baseURL}/managers`, configRequest);
        const data = await response.json();
        if (data.status !== 200) {
            // eslint-disable-next-line no-alert
            alert(data.message);
            return false;
        }
        const { token, tokenRefresh } = data.result;
        localStorage.setItem('@Engequest:token', token);
        localStorage.setItem('@Engequest:tokenRefresh', tokenRefresh);
        setDataAuth({ token, tokenRefresh });
        return true;
    }, []);

    const recoveryPassword = useCallback(async ({ email }) => {
        const isDev = process.env.NODE_ENV !== 'production';
        const baseURL = isDev ? 'http://localhost:3333' : 'https://engequest-staging.herokuapp.com';
        const body = JSON.stringify({ email });
        const configRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        };
        const response = await fetch(`${baseURL}/managers/recoverPassword`, configRequest);
        const data = await response.json();
        // eslint-disable-next-line no-alert
        alert(data.message);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: dataAuth, signIn, recoveryPassword, logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
