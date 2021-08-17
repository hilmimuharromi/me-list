import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { primaryColor } from '../utils/colorSchema'

const AboutScreen = ({ navigation }) => {

    const backHome = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.layout}>
            <TouchableOpacity style={styles.top} onPress={backHome}>
                <Icon name="arrow-back-ios" size={25} color="#000" />
                <Text style={styles.titlePage}>About</Text>
            </TouchableOpacity>
            <View style={styles.layoutLogo}>
                <Image
                    style={styles.imageLogo}
                    height={100}
                    width={500}
                    source={
                        require('../../assets/images/LOGO2.png')} />
                <Text style={styles.logoName}>ME-LIST</Text>

            </View>
            <View style={styles.layoutTitle}>
                <Text style={styles.title}>How to use ME-LIST?</Text>
            </View>
            <View style={styles.body}>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>
                <Text>
                    ..............................................................................
                </Text>

            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    top: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    layoutLogo: {
        flex: 1,
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
    },
    imageLogo: {
        height: 150,
        marginBottom: 0,
        resizeMode: 'center',
        padding: 0
    },
    logoName: {
        margin: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F1D59',
        fontFamily: 'Montserrat-Regular'
    },
    layoutTitle: {
        // flex: 1,
        backgroundColor: primaryColor
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        flex: 2
    },
    titlePage: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        padding: 5
    },

})


export default AboutScreen;