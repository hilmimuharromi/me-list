import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import DonutChart from './DonutChart';
import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory'
import { heightScreen, widthScreen } from '../utils/sizeScreen'

const ActiveTasks = ({ data, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [currentData, setCurrentData] = useState("")

    const CardProject = (props) => {
        const { item } = props
        return (
            <TouchableOpacity
                style={{ ...styles.card, backgroundColor: item.color }}
                onLongPress={() => {
                    setCurrentData(item)
                    setModalVisible(true)
                }}
                onPress={() => {
                    navigation.navigate('ListTasks', {
                        title: item.name,
                        color: item.color,
                        id: item.id
                    });
                }}
            >
                <DonutChart
                    size={80}
                    rotation={0}
                    width={8}
                    fill={item.progress}
                    tintColor="#282825"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#C4C4C469">
                    {
                        (fill) => (
                            <Text>
                                {fill} %
                            </Text>
                        )
                    }
                </DonutChart>
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.totalTasks} Tasks
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.layout}>
            <DeleteCategory
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                data={currentData}
            />
            <View>
                <Text style={styles.title}>Active Projects</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.flatlist}
                numColumns={2}
                horizontal={false}
                data={data}
                renderItem={({ item }) => <CardProject item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        height: heightScreen(50),
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 0,
        marginBottom: 0,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flatlist: {
        alignItems: 'center',
        paddingBottom: 70
    },
    card: {
        width: widthScreen(30),
        height: heightScreen(25),
        borderRadius: 30,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Montserrat-Regular'
    },
    tagline: {
        fontSize: 20,
        color: '#E2FAFF',
        fontFamily: 'Montserrat-Regular'
    }
})
export default ActiveTasks;