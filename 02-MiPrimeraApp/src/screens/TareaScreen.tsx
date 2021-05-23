import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        // justifyContent: 'center'
        // justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        // flex: 2,
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        top: 0
        // alignSelf: 'flex-end'
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        // flex: 1,
        // flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // left: 100
        // alignSelf: 'center'
        top: 50
    },
    cajaAzul: {
        height: 100,
        width: 100,
         // flex: 4,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    },
});