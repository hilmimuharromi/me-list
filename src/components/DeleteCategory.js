import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useDispatch } from 'react-redux'
import { DeleteCategory } from '../stores/action'

const DeleteCategoryComp = (props) => {
    const dispatch = useDispatch();
    const { modalVisible, setModalVisible, data } = props

    const deleteSubmit = () => {
        console.log('masuk delete', data)
        dispatch(DeleteCategory(data.name))
        setModalVisible(false)

    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonSave]}
                        onPress={deleteSubmit}
                    >
                        <Text style={styles.textStyle}>Delete</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>


                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        width: 100,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonSave: {
        backgroundColor: "#E73C3C",
    },
    buttonClose: {
        backgroundColor: "#C4C4C4",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        width: 250
    },
});

export default DeleteCategoryComp;