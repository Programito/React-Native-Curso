import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackparams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuhContext';

interface RouteParams {
    id: number;
    nombre: string;
}

// interface Props extends StackScreenProps<any, any> { };
interface Props extends StackScreenProps<RootStackparams, 'PersonaScreen'> { };

export const PersonaScreen = ({ route, navigation }: Props) => {

    const params = route.params;
    // const params = route.params as RouteParams;

    const {changeUsername} = useContext(AuthContext)
    

    useEffect(() => {
        navigation.setOptions({
            //title: params!.nombre as any
            // title: params.nombre as any
            title: params.nombre
        })
    }, [])

    
    useEffect(() => {
        changeUsername(params.nombre)
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >
                {
                    JSON.stringify(params, null, 3)
                }
           </Text>
        </View>
    )
}
