import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useDispatch } from 'react-redux'
import { UpdateTask, AddTask } from '../stores/action'
import { Picker } from '@react-native-picker/picker';

const ModalAddTask = (props) => {
    const dispatch = useDispatch();
    const { modalVisible, setModalVisible, data, category } = props

    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        const { title, status, } = data
        setTitle(title)
        setStatus(status)
    }, [data])


    const saveData = () => {
        let payload = {
            title,
            status,
            category: category,
            id: data.id,
        }
        if (data.title) {
            dispatch(UpdateTask(payload))
        } else {
            dispatch(AddTask(payload))

        }
        setTitle('')
        setStatus('')
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
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <View style={styles.input}>
                        <Picker
                            style={styles.input}
                            mode="dropdown"
                            selectedValue={status}
                            onValueChange={(itemValue, itemIndex) =>
                                setStatus(itemValue)
                            }>
                            <Picker.Item label="Pending" value="Pending" />
                            <Picker.Item label="In Progress" value="In Progress" />
                            <Picker.Item label="Completed" value="Completed" />
                        </Picker>
                    </View>

                    <View style={styles.layoutButton}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonSave]}
                            onPress={saveData}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                        </Pressable>

                    </View>
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
        backgroundColor: "#1F1D59",
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
        borderWidth: 1,
        borderColor: '#000',
        width: 250,
        margin: 5
    },
    layoutColorPicker: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    layoutListColors: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 150
    },
    listColors: {
        width: 20,
        height: 20,
        margin: 5,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    layoutButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // width: 200,
    }
});

export default ModalAddTask;