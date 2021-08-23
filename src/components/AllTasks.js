import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { heightScreen,} from '../utils/sizeScreen'

const TotalTaskCount = (props) => {
    const { total, status } = props
    const bgColor = () => {
        switch (status) {
            case 'In Progress':
                return '#CBE335'
                break;
            case 'Completed':
                return '#58D462'
                break;
            default:
                return '#E73C3C'
                break;
        }
    }

    return (
        <View style={styles.layoutDot}>
            <View style={{ ...styles.dot, backgroundColor: bgColor() }}>
            </View>
            <Text>{total} {status}</Text>
        </View>
    )
}

const AllTasks = ({ data, navigation }) => {

    return (
        <View style={styles.layout}>
            <View style={styles.top} >
                <Text style={styles.title}>All Tasks</Text>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Icon name="info" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                {
                    data.map((item, index) => (
                        <TotalTaskCount
                            key={index}
                            total={item.total}
                            status={item.status} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        height: heightScreen(25),
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        marginVertical: 5
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    layoutDot: {
        display: 'flex',
        flexDirection: 'row',
        height: heightScreen(5)
    },
    dot: {
        width: heightScreen(3),
        height: heightScreen(3),
        borderRadius: 50,
        marginRight: 10,
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
    about: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Montserrat-Regular'
    }
})
export default AllTasks;