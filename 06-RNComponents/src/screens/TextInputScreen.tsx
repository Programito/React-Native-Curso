import React, { useContext, useState } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     isSubscribe: false
    // });

    // const onChange = (value: string, field: string) => {
    //     setForm({
    //         ...form,
    //         [field]: value
    //     })
    // }

    const { form, onChange, isSubscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false
    })

    const {theme: {colors, dividerColor}  } = useContext(ThemeContext)

    // onChange se usa el onchangeText
    // keyboardApprerance no funciona en android
    // KeyboardAvoidingView y scrollview para mover el teclado para ios
    // TouchableWithoutFeedback touchable con opacity a 1, para cerrar cuando sales de ls inputs clicando
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            style={{...stylesScreen.inputStyle,borderColor: colors.text, color: colors.text}}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={dividerColor}
                        />

                        <TextInput
                            style={{...stylesScreen.inputStyle,borderColor: colors.text, color: colors.text}}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            keyboardAppearance="dark"
                            placeholderTextColor={dividerColor}
                            
                        />


                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Subscribirme</Text>
                            <CustomSwitch isOn={isSubscribe}
                                onChange={(value) => onChange(value, 'isSubscribe')}
                            />
                        </View>

                        {/* <Text>Subscribirme</Text> */}
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                           style={{...stylesScreen.inputStyle,borderColor: colors.text, color: colors.text}}
                            placeholder="Ingrese su teléfono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                            placeholderTextColor={dividerColor}
                        />

                        <View style={{ height: 100 }} />
                    </View>


                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        // borderColor: 'grey',
        // opacity: 0.2,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
});


