import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuhContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    // mac colocarlo como un safeview
    const insets = useSafeAreaInsets();

    const {authState} = useContext(AuthContext);
    

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
            }}>
            <Text style={styles.title}>
                Settings Screen
            </Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {
                authState.favouriteIcon && (<Icon name={authState.favouriteIcon} size={150} color={colores.primary} />)
            }
            
        </View>
    )
}
