import React from 'react'
import { View } from 'react-native'

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#5856D6',
                top: -650,
                bottom: 0,
                width: 1300,
                height: 2120,
                transform: [
                    {rotate: '-70deg'}
                ]
            }}
        />
    )
}
