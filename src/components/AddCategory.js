import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useDispatch } from 'react-redux'
import { AddCategory, UpdateCategory } from '../stores/action'

const NewCategory = (props) => {
    const dispatch = useDispatch();
    const { modalVisible, setModalVisible, category, onUpdateCategory } = props
    const [color, setColor] = useState("#FF9065")
    const [title, setTitle] = useState("")

    useEffect(() => {
        if (category) {
            const { title, color } = category
            setTitle(title)
            setColor(color)
        }
    }, [props])

    let colors = ["#FF9065",
        "#FBCA41",
        "#38D1AD",
        "#3CC4C4",
        "#3ED4F5",
        "#5BBEFF",
        "#787DFF",
        "#D57AF1",
        "#FF779F",
        "#FE8F64"]

    const selectedColor = (item) => {
        return item === color ? 2 : 0
    }

    const saveData = () => {
        let payload = {
            title,
            color,
        }
        console.log(payload)
        if (!category) {
            dispatch(AddCategory(payload))
        } else {
            payload.id = category.id
            payload.oldTitle = category.title
            dispatch(UpdateCategory(payload))
            onUpdateCategory(payload)
        }
        setColor(colors[0])
        setTitle('')
        setModalVisible(false)
    }



    const ColorPicker = () => <View style={styles.layoutColorPicker}>
        <Text>Color :</Text>
        <View style={styles.layoutListColors}>
            {colors.map((item) => (
                <Pressable
                    onPress={() => setColor(item)}
                    style={{ ...styles.listColors, backgroundColor: item, borderWidth: selectedColor(item) }} key={item} />
            ))}
        </View>
    </View>


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <ColorPicker />
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
        borderBottomWidth: 1,
        borderColor: '#000',
        width: 250
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

export default NewCategory;