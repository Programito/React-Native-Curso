import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Movie } from '../interface/movieInterface';
import { Navigation } from '../navigation/Navigation';

interface Props {
    movie: Movie,
    height?: number;
    width?: number
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    // console.log(movie.poster_path)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    //console.log(movie);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity = {0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
                // backgroundColor: 'red'
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,

    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
})