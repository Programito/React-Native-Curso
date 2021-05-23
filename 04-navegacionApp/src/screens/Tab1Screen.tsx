import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

    const {top} = useSafeAreaInsets();

    useEffect(() => {
       console.log('Tab1Screen effect')
    }, []);
    
    return (
        <View style={{...styles.globalMargin, marginTop: top + 20}}>
            <Text style={styles.title}>Iconos</Text>
            
            <Text>
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="alarm-outline" />
                <TouchableIcon iconName="calculator-outline" />
                <TouchableIcon iconName="close-circle-outline"  />
                <TouchableIcon iconName="images-outline"  />
                <TouchableIcon iconName="color-palette-outline" />
            </Text>
        </View>
    )
}
