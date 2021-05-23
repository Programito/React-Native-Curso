import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native'
import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <>
      <NavigationContainer>
       {/* <Navigator /> */}
       <Tabs />
      </NavigationContainer>
    </>
  )
}

export default App;