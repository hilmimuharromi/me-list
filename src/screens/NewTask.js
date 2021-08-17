import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text, TextInput, TouchableOpacity } from 'react-native'
import { AddCategory, FooterBackground } from '../components'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, connect } from 'react-redux'
import { AddTask } from '../stores/action'
import { primaryColor } from '../utils/colorSchema'
const NewTaskScreen = ({ listCategories, navigation }) => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState('Pending')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [modalVisible, setModalVisible] = useState(false)


    useEffect(() => {
        if (listCategories.length > 0) {
            setCategory(listCategories[0].title)
        }
    }, [listCategories])

    const saveData = () => {
        let payload = {
            title,
            status,
            category,
        }
        dispatch(AddTask(payload))
        setTitle('')
        setCategory('')
        setStatus('Pending')
        navigation.goBack()
    }

    const backHome = () => {
        navigation.goBack()
    }
    return (
        <>
            <AddCategory modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <View style={styles.layout}>
                <TouchableOpacity style={styles.top} onPress={backHome}>
                    <Icon name="arrow-back-ios" size={25} color="#000" />
                    <Text style={styles.titlePage}>New Task</Text>
                </TouchableOpacity>
                <View style={styles.body}>
                    <TextInput style={styles.input} placeholder="Title" onChangeText={setTitle} />
                    <View style={styles.input}>
                        <Picker
                            // style={styles.input}
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
                    <View style={styles.input}>
                        <Picker
                            placeholder="Category"
                            numberOfLines={5}
                            style={styles.input}
                            dropdownIconColor="#000"
                            mode="dropdown"
                            selectedValue={category}
                            onValueChange={(itemValue, itemIndex) =>
                                setCategory(itemValue)
                            }>
                            {
                                listCategories.map((item) => (
                                    <Picker.Item
                                        label={item.title}
                                        value={item.title}
                                        key={item.id}
                                        color={item.color}
                                    />
                                ))
                            }
                        </Picker>
                    </View>
                    <Text
                        onPress={() => setModalVisible(true)}
                        style={{ alignSelf: 'flex-start', margin: 10 }}>
                        Add Category
                    </Text>

                    <Text>
                        {JSON.stringify(listCategories)}
                    </Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => saveData()}
                    >
                        <Text style={styles.textButton}>Add Task</Text>
                    </Pressable>
                </View>
            </View>
            <FooterBackground />
        </>
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
        alignItems: 'center'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    titlePage: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        width: 300,
        margin: 5
    },
    button: {
        backgroundColor: primaryColor,
        width: 190,
        height: 45,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textButton: {
        color: '#fff',
        fontSize: 20
    }
})


const mapStateToProps = state => {
    const { task, category } = state;
    const { data, loading } = task
    return {
        listTasks: data,
        listCategories: category.data,
    };
}
const mapDispatchToProps = {
    // GetQuizResult
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskScreen)
