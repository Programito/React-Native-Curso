import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react'
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

// colocar bien la pantalla de forma cutre
// const Stack = createStackNavigator();

// const SettingStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   )
// }


export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      // drawerPosition="right"
      // drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {


  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opcines de menú */}
      {/* mismo que el name */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton,
            flexDirection: 'row'
          }}
          // onPress={() => navigation.navigate('StackNavigator')}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={23} color="black" />
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
            <Icon name="cog-outline" size={23} color="black" />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}