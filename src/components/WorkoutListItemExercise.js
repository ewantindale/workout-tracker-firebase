import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function WorkoutListItemExercise({name, weight, sets}){
    return (
        <View style={styles.exerciseContainer}>
            <View style={styles.exerciseHeader}>
                <Text style={styles.exerciseName}>{name.replace(/([0-9])\w+/, '')}</Text>
                <Text style={styles.exerciseWeight}>{weight}kg</Text>
            </View>
            
            <FlatList
                data={sets}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <Text style={styles.exerciseSets}>{item.completed_reps ? item.completed_reps : 0} </Text>
                }
                horizontal={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    exerciseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    exerciseName: {
        fontWeight: 'bold',
    },
    exerciseWeight: {
        marginLeft: 10
    }
})

export default React.memo(WorkoutListItemExercise);