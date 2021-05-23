import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';




export const Animation101Screen = () => {


    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation()

    const {theme:{colors}} = useContext(ThemeContext)

    return (
        // top da error es el transform
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    backgroundColor: colors.primary,
                    opacity: opacity,
                    transform: [{
                        translateY: position
                    }]
                }} />
            <Button
                title="FadeIn"
                onPress={() => {
                        fadeIn();
                        startMovingPosition(100);
                }}
                color={colors.primary}
            />
            <Button
                title="FadeOut"
                onPress={()=>fadeOut()}
            />
        </View>


    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});