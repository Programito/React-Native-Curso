import React from 'react';
import { SafeAreaView, SafeAreaViewBase, Text, View } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {

  // return (
  //   <View style={{
  //     flex: 1,
  //     // backgroundColor: 'red',
  //     justifyContent: 'center'
  //   }}>
  //     <Text style={{
  //       fontSize: 45,
  //       textAlign: 'center'
  //     }}>
  //       Hola Mundo
  //     </Text>
  //   </View>
  // )
  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <HolaMundoScreen />
           <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

