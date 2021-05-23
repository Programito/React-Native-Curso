import React from 'react'
import { View, Text, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';

import { MovieFull, Genre } from '../interface/movieInterface';
import { Cast } from '../interface/creditInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>

            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 15 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
            </View>

            {/* Historia */}
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>
                Historia
            </Text>

            <Text style={{ fontSize: 16, marginLeft: 10 }}>
                {movieFull.overview}
            </Text>
            {/* Historia */}
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold',marginLeft: 10 }}>
                Presupuesto
                </Text>
            <Text style={{ fontSize: 18,marginLeft: 10 }}>
                {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
            </Text>

            {/* Casting */}
            <View style={{marginTop:10, marginBottom: 100}}>
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                    Actores
            </Text>
           
                {/* <CastItem actor={cast[0]} />*/}

             <FlatList 
                    data={cast}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=> <CastItem actor={item} />}
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 10, height: 60}}
            />
            </View>
        </>
    )
}
