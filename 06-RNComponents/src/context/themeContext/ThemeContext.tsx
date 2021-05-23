import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void
    setLightTheme: () => void
}


export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {

    // hook sistema operativo
    // const colorScheme = useColorScheme();

    // const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme)
    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme)

    // esto solo funciona en ios
    // useEffect(() => {
    //     (colorScheme === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme();
    // }, [colorScheme])

    useEffect(() => {
        AppState.addEventListener('change', (status) => {

            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme();
            }
        })
    }, [])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('setDarkTheme')
    };
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('setLightTheme')
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}