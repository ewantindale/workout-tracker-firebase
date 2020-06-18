import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Set from './Set'

function Exercise({item, exercise_index, openSetWorkingWeightModal}){

    function onWorkingWeightPressed() {
        openSetWorkingWeightModal(exercise_index);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleText}>{item.name.replace(/([0-9])\w+/, '')}</Text>
                <TouchableOpacity onPress={onWorkingWeightPressed}>
                    <Text style={styles.subText}>{item.sets.length}x{item.sets[0].goal_reps} {item.weight}kg</Text>
                </TouchableOpacity>
                
            </View>
            <FlatList
                data={item.sets}
                renderItem={({item, index}) => <Set index={index} exercise_index={exercise_index} item={item}/>}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'space-evenly'
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        elevation: 3
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerSecondary: {
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 20,
        marginBottom: 5
    },
    subText: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'

    }
});

export default React.memo(Exercise);