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
            {/* <View style={styles.layoutTitle}>
                <Text style={styles.title}>How to use ME-LIST ?</Text>
            </View> */}
            <View style={styles.body}>
                <Text style={styles.textbody}>
                This application is expected to make it easier for users to organize their tasks based on the categories that users specify, equipped with a progress feature for each category to provide users with an experience of how much work has been done for each project.
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
        justifyContent: "flex-end",
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
        margin: 8,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1F1D59',
        fontFamily: 'Montserrat-Regular'
    },
    layoutTitle: {
        // flex: 1,
        backgroundColor: primaryColor,
        height: 50
    },
    body: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 50,
        flex: 2
    },
    titlePage: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular'
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
    },
    textbody: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        padding: 2

    },

})


export default AboutScreen;