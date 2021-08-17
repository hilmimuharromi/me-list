import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native"
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthScreen, heightScreen } from '../utils/sizeScreen'
const CardTask = ({ onClickTask, item, deleteTask, }) => {
    const [current, setCurrent] = useState("")

    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <RectButton activeOpacity={1} onPress={() => {
                current.close()
                deleteTask(item)
            }
            }>
                <View style={styles.deleteBox}>
                    <Animated.Text style={{ transform: [{ scale: scale }] }}>
                        <Icon name="trash" size={30} color="#fff" />
                    </Animated.Text>
                </View>
            </RectButton >
        );
    };

    const colorStatus = () => {
        switch (item.status) {
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
        <>
            <View style={styles.mainContainer}>
                <Swipeable ref={(ref) => setCurrent(ref)} renderLeftActions={leftSwipe} rightThreshold={20} >
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={{ ...styles.cardContainer, borderColor: colorStatus() }}
                        onPress={() => onClickTask(item)}
                    >
                        <View style={{ ...styles.left, backgroundColor: colorStatus() }}>
                        </View>
                        <View style={{ justifyContent: "space-around", flex: 1, height: "90%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "500" }}>
                                {item.title}
                            </Text>
                            {/* <Text>{displayDate(item.date)}</Text> */}
                        </View>
                    </TouchableOpacity>
                </Swipeable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "red",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        elevation: 4,
    },
    cardContainer: {
        width: widthScreen(90),
        height: heightScreen(5),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopStartRadius: 30,
        borderBottomStartRadius: 30,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    left: {
        width: 30,
        height: heightScreen(5),
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 20,
        elevation: 2
    },
    deleteBox: {
        width: widthScreen(20),
        height: heightScreen(5),
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        elevation: 1,
    },

})

export default CardTask