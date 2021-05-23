import React  from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChartScreen } from '../screens/ChartScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

// no hacerlo nunca ignora los warning
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { colores } from '../theme/appTheme';
LogBox.ignoreLogs(['Sending']);



const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {

   // renombrar
   const {top: paddingTop} = useSafeAreaInsets();


  return (
    <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle = {{
            backgroundColor: 'white'
        }}
        tabBarOptions = {{
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary
            },
            style: {
                // borderTopColor: colores.primary,
                // borderTopWidth: 0,
                shadowColor: 'transparent',
                elevation: 0
            }
        }}
        screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chart':
                            iconName = 'chatbox-ellipses-outline'
                            break;
                        case 'Contact':
                            iconName = 'people-outline'
                            break;
                        case 'Albums':
                            iconName = 'albums-outline'
                            break;

                    }
                    return <Icon name={iconName} size={20} color={color} />
                }

            })
        }
    >
      <Tab.Screen name="Chart" component={ChartScreen} />
      <Tab.Screen name="Contact" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}