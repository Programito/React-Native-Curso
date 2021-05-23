import React from 'react'
import { Text, View ,FlatList} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';








export const HomeScreen = () => {

    // const {top} = useSafeAreaInsets();

    // const renderMenuItem = (menuItem: MenuItem) => {
    //     return (
    //         <View>
    //             <Text>{menuItem.name}-{menuItem.icon}</Text>
    //         </View>
    //     )
    // }

    // IOS mover el header con el flatlist
    // const renderListHeader = () => {
    //     return (
    //         <View style={{marginTop: top + 20, marginBottom: 20}}>
    //              <Text style={styles.title}>Opciones de Menú</Text>
    //         </View>
    //     )
    // }

    // const itemSeparator = () => {
    //     return (
    //         <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    //     )
    // }

    // renderItem { (item, index)}
    return (
        <View style={{flex:1, ...styles.globalMargin}}>

           {/* () => itemSeparatos == itemSepartor */}
           {/* renderItem={({item}) => renderMenuItem(item)} */}
            <FlatList 
                data={menuItems}
                renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
                keyExtractor = {(item)=>item.name}
                
                // ListHeaderComponent = {renderListHeader}
                ListHeaderComponent = { () => <HeaderTitle title="Opciones de menú" />}
               
                ItemSeparatorComponent={()=> <ItemSeparator />}
            />
        </View>
    )
}
