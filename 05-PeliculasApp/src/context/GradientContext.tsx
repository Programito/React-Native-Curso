import React, { createContext, useState } from 'react';
import ImageColors from 'react-native-image-colors';
import { getImageColors } from '../helpers/getColores';

interface ImageColors {
    primary: string,
    secondary: string
}

interface ContextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    setMainColors: (color: ImageColors) => void,
    setPreviousMainColors: (color: ImageColors) => void
}



export const GradientContext = createContext({} as ContextProps) // Todo: Definir Tipo

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = (colors: ImageColors) => {
        setColors(colors);
    }


    const setPreviousMainColors = (colors: ImageColors) => {
        setPrevColors(colors);
    }

    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setPreviousMainColors
            }}
        >
            {children}
        </GradientContext.Provider>
    )
}