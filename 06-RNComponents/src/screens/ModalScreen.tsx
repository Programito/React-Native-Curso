import React, {useState} from 'react'
import { Button, View, Modal, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';


export const ModalScreen = () => {

    const [isVisible, setIsViaible] = useState(false)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen"></HeaderTitle>

            <Button
                title="Abrir Modal"
                onPress={()=> setIsViaible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                // transparent={true}
            >
                {/* Background negro */}
                <View style={{
                    flex: 1,
                    // width: 100,
                    // height: 100,
                    backgroundColor: 'rgb(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>

                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5

                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
                        <Text  style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>Cuerpo del modal</Text>
                        <Button
                                 title="Cerrar"
                                 onPress={()=> setIsViaible(false)}
                        />

                      
                    </View>

                </View>

            </Modal>
        </View>
    )
}
