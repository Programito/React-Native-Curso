import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack';
import { styles, colores } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';


// https://reactnavigation.org/docs/getting-started/

// interface Props extends StackScreenProps<any, any> { };

// menu
interface Props extends DrawerScreenProps<any, any> { };


export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                // <Button
                //     title= "Menu"
                //     onPress={() => navigation.toggleDrawer()}
                // />
                <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => navigation.toggleDrawer()}  
                >
                     <Icon name="menu-outline" size={35} color={colores.primary} />
                </TouchableOpacity>
           )
    })
}, [])

return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>

        {/* igual que el name del stacknavigator */}
        <Button
            title="Ir página 2"
            onPress={() => navigation.navigate('Pagina2Screen')}
        />

        <Text style={{marginVertical: 20, fontSize: 20, marginLeft:5}}>
             Navegar con argumetos</Text>

        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#5856d6'
                }}
                onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Pedro' })}
            >
                <Icon name="body-outline" size={35} color='white' />
                <Text style={styles.botonGrandeTexto}>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#FF9427'
                }}
                onPress={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'Susana' })}
            >
                  <Icon name="woman-outline" size={35} color='white' />
                <Text style={styles.botonGrandeTexto}>Susana</Text>
            </TouchableOpacity>
        </View>
    </View>
)
}
