import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';



interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Flash"]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Vegeta", "Broly", "Son Gohan", "Trunks", "Evangelion", "Mazinger Z", "Devilman", "Gran Mazinger Z",
            "Grendizer", "Nami", "Chopper", "Zoro", "Luffy", "Koji Kabuto", "Sayaka", "Tatsu", "Eden", "L", "Bulma", "Naruto", "Sasuke", "Light",
            "Edward Elric", "Kakashi", "Tanjiro", "Kyojuro", "Akaza", "Zenitsu Agatsuma", "Inosuke Hashibira", "Kagaya Ubuyashiki", "Akira Fudo",
            "Nico Robin", "Ace", "Brook", "Franky", "Oden", "Kyozo", "Kirara", "Inuyasha", "Cell", "Freezer", "Tapion", "Minocia", "Yanemba"]
    }
];

// ListHeaderComponent para que no se quede arriba visible siemrpe con el scroll
// renderSectionFooter por cada section
export const CustomSectionListScreen = () => {

    const {theme: {colors, dividerColor, dark}  } = useContext(ThemeContext)

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
         
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent= {()=>    <HeaderTitle title="Section List"></HeaderTitle>}
                ListFooterComponent= {() => (
                    <View style={{marginBottom: 70}}>
                        <HeaderTitle title={'Total de casas ' + casas.length}></HeaderTitle>
                    </View>
                )}
                renderItem={({ item }) => <Text style={{color:colors.text}}>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={section.casa}></HeaderTitle>
                    </View>
                )}
                renderSectionFooter={({section})=> (
                    <HeaderTitle title={'Total ' + section.data.length}></HeaderTitle>
                )}

                SectionSeparatorComponent= {() => <ItemSeparator />}
                ItemSeparatorComponent = {() => <ItemSeparator />}

                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
