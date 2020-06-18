import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutListItemExercise from './WorkoutListItemExercise'

function WorkoutListItem({name, created, exercises}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>{created.toDate().toDateString()}</Text>
                <Text style={styles.title}>{name}</Text>
            </View>
            <FlatList
                data={exercises}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <WorkoutListItemExercise {...item}/>}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRightWidth: 1,
        padding: 10
    },
    header: {
        borderBottomWidth: 1,
        padding: 10
    },
    list: {
        padding: 10
    },
    date: {
        fontSize: 18
    }, 


});

export default React.memo(WorkoutListItem);