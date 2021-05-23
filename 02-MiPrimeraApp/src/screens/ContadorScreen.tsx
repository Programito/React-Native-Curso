import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {


    const [contador, setContador] = useState(11)

    return (
        <View style={styles.container}>
            {/* por defecto position: 'relative' */}
            {/* <Text style={{
                textAlign: 'center',
                fontSize: 40,
                top: -15
                }}>
                    El contador: {contador}
            </Text> */}

            <Text style={styles.title}>
                El contador: {contador}
            </Text>

            {/* <Button 
                title="Click"
                onPress= {() => setContador(contador + 1)}
            /> */}


            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
            />

            <Fab
                title="-1"
                position="bl"
                onPress={() => setContador(contador - 1)}
            />


            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>

            </TouchableOpacity> */}




        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -15
    }
})