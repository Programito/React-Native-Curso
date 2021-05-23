import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { darkTheme } from '../context/themeContext/ThemeReducer';

export const PullToRefreshScreen = () => {

    // alternativa para ios
    // const {top}= useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState(false)

    const {theme: {colors, dividerColor, dark}  } = useContext(ThemeContext)

    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(()=> {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola mundo');
        },3000)
    }

    // progressViewOffset no funciona en ios, espacio donde ponerlo
    // colors tambien es de android
    // backgroundColor en style solo en ios
    // flatlist cargar perezosa
    return (
        // <SafeAreaView style={{flex: 1}}>
        <ScrollView
            // style={{
            //     marginTop: refreshing ? top : 0
            // }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={dividerColor}
                    // colors={['white','red','orange']}
                    colors={[colors.text]}
                    // style={{backgroundColor: '#5856d6'}}
                    // tintColor='white'
                    // title="Refreshing"
                    // titleColor="white"
                    tintColor={dark? 'white': 'black'}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh" />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
        // </SafeAreaView>
    )
}
