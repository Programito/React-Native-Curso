
import React, { useContext, useState } from 'react'
import { View, Switch, Platform, Text, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const SwitchScreen = () => {

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled( !isEnabled);


    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const {isActive, isHungry, isHappy} = state;

    const {theme:{colors}} = useContext(ThemeContext)

    const onChange = (value: boolean, field: keyof typeof state) => {
        setstate({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title="Switches" />

            {/* <Switch
                trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
                // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            /> */}

            <View style={styles.switchRow}>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                    }}>isActive</Text>
                <CustomSwitch isOn={isActive}
                    onChange={(value)=> onChange(value, 'isActive')}    
                />
            </View>

            <View style={styles.switchRow}>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                    }}>isHungry</Text>
                <CustomSwitch isOn={isHungry}
                    onChange={(value)=> onChange(value, 'isHungry')}    
                />
            </View>

            <View style={styles.switchRow}>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                    }}>isHappy</Text>
                <CustomSwitch isOn={isHappy}
                    onChange={(value)=> onChange(value, 'isHappy')}    
                />
            </View>

        




            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
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