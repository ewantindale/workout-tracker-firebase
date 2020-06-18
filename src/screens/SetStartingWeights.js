import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { PRIMARY_COLOR } from '../constants';

function StartingWeight({ name, initialValue, setStartingWeight }){
    const [value, setValue] = useState(initialValue);
    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{name}</Text>
            <View style={styles.inputView}>
                <TextInput
                    value={value.toString()}
                    onChangeText={(weight) => setValue(weight)}
                    onEndEditing={() => setStartingWeight(name, parseInt(value))}
                    keyboardType='number-pad'
                    selectTextOnFocus={true}
                    maxLength={5}
                    style={styles.exerciseTextInput}
                />
                <Text style={{color: 'white', fontSize: 18}}> kg </Text>
            </View>
        </View>
    )
}

export default function SetStartingWeights({route, navigation}) {

    const userRef = firestore().collection('users').doc(route.params.uid);

    navigation.setOptions({
        title: 'Set your starting weights', 
        headerShown: false
    });

    const [startingWeights, setStartingWeights] = useState({
        'Squat': 100,
        'Bench Press': 100,
        'Overhead Press': 100,
        'Deadlift': 100,
        'Barbell Row': 100
    });

    function setStartingWeight(name, weight){
        const newStartingWeights = startingWeights;
        newStartingWeights[name] = weight;
        setStartingWeights(newStartingWeights);
    }

    function onDoneButtonPressed() {

        let data = {
            newUserSetupCompleted: true,
            workingWeights: {
                ...route.params.workingWeights,
                ...startingWeights
            }
        }

        for(let [key, value] of Object.entries(data.workingWeights)) {
            data.workingWeights[key] = value * 0.7;
        }

        userRef.update(data);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Set your starting weights
            </Text>
            <Text style={styles.subTitle}>
                Enter your 1 rep max for the following exercises so that we can set your starting weights. You can always adjust these later on.
            </Text>
            <FlatList
                data={Object.keys(startingWeights)}
                keyExtractor={(item, index) => item}
                renderItem={({item}) => 
                    <StartingWeight name={item} initialValue={startingWeights[item]} setStartingWeight={setStartingWeight}/>
                }
                removeClippedSubviews={false}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.doneButton}
                    onPress={onDoneButtonPressed}
                >
                    <Text style={styles.doneButtonText}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        padding: 25
    },
    title: {
        fontSize: 25,
        color: 'white'
    },
    subTitle: {
        marginTop: 20,
        color: 'white'
    },
    exerciseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 10,
        alignItems: 'center',
        paddingVertical: 10
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    exerciseName: {
        color: 'white',
        fontSize: 18,
    },
    exerciseTextInput: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: 'white',
        marginBottom: 5
    },
    doneButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        elevation: 3,
    },
    doneButtonText: {
        color: PRIMARY_COLOR,
        fontSize: 20
    },
    backButton: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    backButtonText: {
        color: 'white',
        fontSize: 18
    },
});