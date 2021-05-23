import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator,TouchableOpacity, ScrollView } from 'react-native';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interface/movieInterface';
import { RootStackParams } from '../navigation/Navigation';



import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

// navigation crear el type
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }


export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetail(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Botón para cerrar */}
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={()=>navigation.pop()}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={60}

                    />
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.7,
        marginLeft: screenWidth * 0.05,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        // overflow: 'hidden'
        // borderBottomEndRadius:25,
        // borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
        borderRadius: 100
    },
    marginContainer: {
        marginHorizontal: screenWidth * 0.1,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }
});
