import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

// por defecto flexDirection es column
// flexDirection: row, column-revers
// por defecto justifyContent:; flex-start
// flex end no cambia orden el column-revers cambia orden
// flex-end, space-around
// alignItems baseline: minimo necesario
// alignSelf cambia comportamiento del padre
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end'
        // alignItems: 'flex-start'
        alignItems: 'flex-start',
        // flexWrap: 'wrap' // acomodar cuando hay muchos items
    },
    caja1: {
        // flex:4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // alignSelf: 'center'
    },
    caja2: {
        // flex:4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // alignSelf: 'flex-start'
    },
    caja3: {
        // flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // alignSelf: 'flex-end'
    }
});