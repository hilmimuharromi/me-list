import React from 'react';
import { View, StyleSheet, Pressable, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { widthScreen } from '../utils/sizeScreen'

const FooterHome = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <Pressable style={styles.buttonNewTask}
                onPress={() => {
                    navigation.navigate('NewTask')
                }}
            >
                <Icon name="plussquare" size={24} color="#fff" />
                <Text style={styles.textButton}>New Task</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        marginBottom: 20,
        position: 'absolute',
        bottom: 0,
        width: widthScreen(100),
        backgroundColor: 'transparent',
    },
    buttonNewTask: {
        backgroundColor: '#1F1D59',
        width: 190,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textButton: {
        color: '#fff',
        fontSize: 23
    }
})

export default FooterHome;