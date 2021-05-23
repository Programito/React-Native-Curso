import React, { useRef } from 'react'
import { View, Animated, Button } from 'react-native'
import { useFade } from '../hooks/useFade';


export const FadeScreen = () => {

    // const opacity = useRef(new Animated.Value(0)).current;

    // const fadeIn = () => {
    //     Animated.timing(
    //         opacity,
    //         {
    //             toValue: 1,
    //             duration: 300,
    //             useNativeDriver: true
    //         }
    //     ).start();
    // }

    // const fadeOut = () => {
    //     Animated.timing(
    //         opacity,
    //         {
    //             toValue: 0,
    //             duration: 300,
    //             useNativeDriver: true
    //         }
    //     ).start();
    // }

    const {opacity, fadeIn, fadeOut} = useFade();


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {/* necesitas cambiar el view por animated.view */}
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderRadius: 10,
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity
                }} />

            <Button
                title="FadeIn"
                onPress={() => fadeIn()}
            />

            <Button
                title="FadeOut"
                onPress={fadeOut}
            />
        </View>
    )
}
