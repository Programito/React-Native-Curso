import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuhContext';


export const AlbumsScreen = () => {

   const {logout, authState: {isLoggedIn}} = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumScreen</Text>
            {
                isLoggedIn && ( <Button 
                    title="Logout"
                    onPress={logout}
                />)
            }

           

        </View>
    )
}
