import React,{ createContext, useReducer } from "react"
import { authReducer } from './authReducer';

// Definir cçomo luce, que información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favouriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favouriteIcon: undefined
}

// Lo usaremos para decirle a React cómo luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedeor de lestado
// export const AuthProvider = ({children}: {children: JSX.Element[]}) => {
    export const AuthProvider = ({children}: any) => {   

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({
            type: 'signIn'
        })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUserName', payload: username})
    }
        
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}