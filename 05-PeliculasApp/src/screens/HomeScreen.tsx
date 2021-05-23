import { useNavigation } from '@react-navigation/core'
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, View, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import movieDb from '../api/movieDB'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from "react-native-image-colors"
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';




const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const  {setMainColors} = useContext(GradientContext)

    const getPosterColors = async(index: number) => {

        const movie= nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        // const colors = await ImageColors.getColors(uri, {})

        // console.log(colors);

        const [primary ='green', secondary='orange'] = await getImageColors(uri);

        console.log({primary, secondary})

        setMainColors({primary, secondary})
    }


    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0)
        }
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    // console.log(nowPlaying[0]?.title);

    return (
        <GradientBackground>

            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* <MoviePoster movie={peliculasEnCine[0]}/> */}

                    {/* Carousel princpal */}
                    {/* onSnapToItem index activo */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>

                    {/* Peliculas populares */}
                    {/* <View style={{backgroundColor: 'red', height: 260}}>
               <Text style={{fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
               <FlatList
                  data={peliculasEnCine}
                  renderItem = {({item}:any)=> (
                  <MoviePoster movie={item} width={140} height={200}/>
                  )}
                  keyExtractor={(item)=> item.id.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator ={false}
               />

           </View> */}

                    <HorizontalSlider title="Popular" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upcoming} />

                </View>
            </ScrollView>
        </GradientBackground>
    )
}
