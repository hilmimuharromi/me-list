import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardTask, AddCategory, ModalAddTask, FooterBackground } from '../components'
import { DeleteTask } from '../stores/action'
import { primaryColor } from '../utils/colorSchema'
const ListTasksScreen = ({ listTasks, route, navigation, DeleteTask
}) => {
    const category = route.params;
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    const [categoryModal, setCategoryModal] = useState(false)
    const [formTaskModal, setFormTaskModal] = useState(false)
    const [currentData, setCurretData] = useState("")




    useEffect(() => {
        let filterCategory = listTasks.filter((item) => item.category === category.title)
        setData(filterCategory)
    }, [listTasks])

    useEffect(() => {
        let filterSearch = data.filter((item) => item.title.toUpperCase().includes(searchText.toUpperCase()))
        setFilteredData(filterSearch)

    }, [searchText, data])

    const backHome = () => {
        navigation.goBack()
    }

    const deleteTask = (task) => {
        DeleteTask(task.id)
    }

    const onClickTask = (task) => {
        setCurretData(task)
        setFormTaskModal(true)
    }

    const onUpdateCategory = (item) => {
        navigation.setParams({
            title: item.title,
            color: item.color,
            id: item.id
        });
    }

    return (
        <View style={styles.layout}>
            <AddCategory
                modalVisible={categoryModal}
                setModalVisible={setCategoryModal}
                category={category}
                onUpdateCategory={onUpdateCategory}
            />
            <ModalAddTask
                modalVisible={formTaskModal}
                setModalVisible={setFormTaskModal}
                data={currentData}
                category={category.title}
            />
            <View style={styles.top}>
                <TouchableOpacity onPress={backHome}>
                    <Icon name="arrow-back-ios" size={25} color="#000" />
                </TouchableOpacity>
                <View style={styles.layoutSearch}>
                    <TextInput style={styles.input} onChangeText={setSearchText} />
                    <Icon name="search" size={25} color="#000" />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => setCategoryModal(true)}>
                <Text style={{ ...styles.titlePage, color: category.color }}>
                    {category.title}
                </Text>
            </TouchableOpacity>
            <View style={styles.body}>
                <FlatList
                    data={searchText ? filteredData : data}
                    renderItem={({ item }) => <CardTask item={item} deleteTask={deleteTask} onClickTask={onClickTask} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={() => {
                        setCurretData("")
                        setFormTaskModal(true)
                        // ResetEditor()
                        // navigation.push("AddNote")
                    }}
                >
                    <Text style={{ fontSize: 28, color: "#fff" }}>+</Text>
                </TouchableOpacity>
            </View>
            <FooterBackground />
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    layoutSearch: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        height: 40
    },
    body: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 30,
        justifyContent: "flex-end",
        alignContent: "flex-end",
        alignItems: "flex-end",

    },
    titlePage: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Montserrat-Regular'
    },
    input: {
        width: 230
    },
    button: {
        backgroundColor: '#1F1D59'
    },
    buttonAdd: {
        backgroundColor: primaryColor,
        width: 70, height: 70,
        justifyContent: "center", alignItems: "center",
        borderRadius: 50, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
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
    DeleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTasksScreen)


