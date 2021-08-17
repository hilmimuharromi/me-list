import React from 'react';
import { View, StyleSheet } from 'react-native'

const FooterBackground = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.second} />
            <View style={styles.first} />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        position: 'absolute',
        bottom: 0
    },
    first: {
        width: 100,
        height: 100,
        borderRadius: 70,
        backgroundColor: '#24A6D9',
        position: 'absolute',
        bottom: -10,
        left: -40
    },
    second: {
        width: 100,
        height: 100,
        borderRadius: 70,
        backgroundColor: '#58D462',
        position: 'absolute',
        bottom: -70,
        left: 10
    }
})

export default FooterBackground;