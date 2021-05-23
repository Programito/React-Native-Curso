import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style= {styles.container}> 
            <View style= {styles.cajaMorada}></View>
            <View style= {styles.cajaNanraja}></View>
            <View style= {styles.cajaVerde}></View>
        </View>
    )
}

// todos por defecto tienen position relative
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        // top: 100,
        // left: 50
        position: 'absolute',
        top: 0,
        right: 0
    },
    cajaNanraja: {
        width: 100,
        height: 100,
        backgroundColor: '#f0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
        // top: -50
        // bottom: 0
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0,
        ...StyleSheet.absoluteFillObject // estira todo en absolute
    }
});
