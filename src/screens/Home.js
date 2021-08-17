import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { HeaderHome, AllTasks, ActiveTasks, FooterHome, AddCategory } from '../components'
import { connect } from 'react-redux';

const HomeScreen = ({ navigation, listTasks, listCategories }) => {
    const [activeProjects, setActiveProjects] = useState([])
    const [allTasks, setAllTasks] = useState([
        {
            status: 'Pending',
            total: 0
        },
        {
            status: 'In Progress',
            total: 0
        },
        {
            status: 'Completed',
            total: 0
        }
    ])


    useEffect(() => {
        let tempData = []
        let pendingTask = 0
        let inProgress = 0
        let completed = 0
        listCategories.map((category) => {
            let dataActive = {
                name: category.title,
                color: category.color,
                totalTasks: 0,
                id: category.id
            }
            let completedTasks = 0
            listTasks.map((item) => {
                if (item.category === category.title) {
                    dataActive.totalTasks += 1
                    if (item.status === 'Completed') {
                        completedTasks += 1
                        completed += 1
                    } else if (item.status === 'Pending') {
                        pendingTask += 1
                    } else if (item.status === 'In Progress') {
                        inProgress += 1
                    }
                }
            })

            dataActive.progress = Math.round(completedTasks / dataActive.totalTasks * 100)

            let dataAll = [
                {
                    status: 'Pending',
                    total: pendingTask
                },
                {
                    status: 'In Progress',
                    total: inProgress
                },
                {
                    status: 'Completed',
                    total: completed
                }
            ]

            if (dataActive.totalTasks) {
                tempData.push(dataActive)
            }
            setAllTasks(dataAll)


        })
        setActiveProjects(tempData)



    }, [listTasks, listCategories])
    return (
        <View style={styles.layout}>
            <HeaderHome />
            <AllTasks data={allTasks} navigation={navigation} />
            <ActiveTasks data={activeProjects} navigation={navigation} />
            <FooterHome navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
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
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
