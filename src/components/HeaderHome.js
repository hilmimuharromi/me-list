import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native'
import { primaryColor } from '../utils/colorSchema'

const HeaderHome = () => {
    return (
        <>
            <StatusBar backgroundColor={primaryColor} />
            <View style={styles.layout}>
                <Text style={styles.title}>ME-LIST</Text>
                <Text style={styles.tagline}>Reminds Everytings</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        backgroundColor: primaryColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E2FAFF',
        fontFamily: 'Montserrat-Regular'
    },
    tagline: {
        fontSize: 20,
        color: '#E2FAFF',
        fontFamily: 'Montserrat-Regular'
    }
})
export default HeaderHome;