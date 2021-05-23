import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}




const BottonTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
    return (
        <BottonTabAndroid.Navigator
            sceneAnimationEnabled= {true}
            barStyle = {{
                backgroundColor: colores.primary
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color, focused }) => {

                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'bandage-outline'
                                break;
                            case 'Tab2Screen':
                                iconName = 'basketball-outline'
                                break;
                            case 'StackNavigator':
                                iconName = 'bookmarks-outline'
                                break;

                        }
                        return <Icon name={iconName} size={20} color={color} />
                    }

                })
            }
        >
            <BottonTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottonTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
            <BottonTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottonTabAndroid.Navigator>
     );
}

const BottomTabIos = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
            <BottomTabIos.Navigator

                sceneContainerStyle={{
                    backgroundColor: 'white'
                }}

                // interiores
                tabBarOptions={{
                    activeTintColor: colores.primary,
                    style: {
                        borderTopColor: colores.primary,
                        borderTopWidth: 0,
                        elevation: 0 // android
                    },
                    labelStyle: {
                        fontSize: 15
                    }

                }}

                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ color, focused, size }) => {

                            let iconName: string = '';
                            switch (route.name) {
                                case 'Tab1Screen':
                                    iconName = 'bandage-outline'
                                    break;
                                case 'Tab2Screen':
                                    iconName = 'basketball-outline'
                                    break;
                                case 'StackNavigator':
                                    iconName = 'bookmarks-outline'
                                    break;

                            }
                            return   <Icon name={iconName} size={20} color={color} />
                        }

                    })
                }

            >
                {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}> T1</Text> }} component={Tab1Screen} /> */}
                <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
                <BottomTabIos.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
                <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
            </BottomTabIos.Navigator>
    );
}