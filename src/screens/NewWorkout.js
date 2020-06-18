import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import Exercise from '../components/Exercise'
import { finishWorkout, cancelWorkout, updateWorkingWeight } from '../redux';
import SetWorkingWeightModal from '../components/SetWorkingWeightModal';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { PRIMARY_COLOR } from '../constants';

function NewWorkout({ route, currentWorkout, navigation, finishWorkout, cancelWorkout, updateWorkingWeight}) {

    const {userData, uid} = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTargetExercise, setModalTargetExercise] = useState(null);

    navigation.setOptions({
        title: currentWorkout.name
    })

    async function incrementNextWorkoutInCycle() {
        const ref = firestore().collection('users').doc(uid)
        ref.get().then(doc => {
            const workoutInCycle = doc.data().nextWorkoutInCycle
            if (workoutInCycle < 5){
                ref.update({nextWorkoutInCycle: workoutInCycle + 1})
            } else {
                ref.update({nextWorkoutInCycle: 0})
            }
        });
    }

    async function addWorkoutToFirebase() {
        const ref = firestore().collection('workouts');
        await ref.add({
            created: firebase.firestore.Timestamp.now(),
            uid: uid,
            ...currentWorkout,
        });
    }

    async function updateWorkingWeightsInFirebase() {
        const ref = firestore().collection('users').doc(uid)
        const newWorkingWeights = getNewWorkingWeights(currentWorkout, userData.workingWeights)
        await ref.update({
            workingWeights: {
                ...userData.workingWeights,
                ...newWorkingWeights
            }
        });
    }

    function getNewWorkingWeights(workout, workingWeights){
        for (exercise of workout.exercises){
            if (allRepsWereCompleted(exercise.sets)){
                workingWeights[exercise.name] = exercise.weight + 2.5
            } else {
                workingWeights[exercise.name] = exercise.weight
            }
        }
        return workingWeights
    }

    function allRepsWereCompleted(sets) {
        for (set of sets){
            if (set.completed_reps < set.goal_reps){
                return false
            }
        }
        return true
    }

    function onCancelButtonPressed() {
        Alert.alert('', 'Are you sure you want to cancel this workout?', 
        [
            {
                text: 'Yes', onPress:() => {
                    navigation.navigate('WorkoutList')
                    cancelWorkout(); 
                }
            },
            {
                text: 'No'
            }
        ])
    }

    function onFinishButtonPressed() {
        Alert.alert('', 'Finish workout and add it to the workout log?', 
        [
            {
                text: 'Yes', onPress:() => {
                    navigation.navigate('WorkoutList')
                    addWorkoutToFirebase(); 
                    updateWorkingWeightsInFirebase();
                    incrementNextWorkoutInCycle();
                    finishWorkout();
                }
            },
            {
                text: 'No'
            }
        ])
    }

    function openSetWorkingWeightModal(exercise_index){
        setModalVisible(true);
        setModalTargetExercise(exercise_index);
    }

    function submitSetWorkingWeightModal(newWorkingWeight) {
        updateWorkingWeight(parseFloat(newWorkingWeight), modalTargetExercise);
    }
    
    return (
        <>
            {modalVisible ? <SetWorkingWeightModal 
                exerciseName={currentWorkout.exercises[modalTargetExercise].name} 
                initialValue={currentWorkout.exercises[modalTargetExercise].weight}
                submitSetWorkingWeightModal={submitSetWorkingWeightModal}
                setModalVisible={setModalVisible}
            /> : null}
            

            <View style={styles.container}>
                <FlatList
                    data={currentWorkout.exercises}
                    renderItem={({item, index}) => 
                        <Exercise 
                            item={item} 
                            exercise_index={index} 
                            openSetWorkingWeightModal={openSetWorkingWeightModal}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    removeClippedSubviews={false}
                    style={styles.flatlist}
                />
                <View style={styles.buttonContainer}>         
                    <TouchableOpacity style={styles.cancelWorkoutButton} onPress={onCancelButtonPressed}>
                        <Text style={styles.cancelWorkoutButtonText}>
                            Cancel Workout
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.finishWorkoutButton} 
                        onPress={onFinishButtonPressed}>
                        <Text style={styles.finishWorkoutButtonText}>
                            Finish Workout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

function mapStateToProps(state){
    return {
        currentWorkout: state.currentWorkout.workout
    };
};

const mapDispatchToProps = {
    finishWorkout,
    cancelWorkout,
    updateWorkingWeight
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist:{
        padding: 10,
    },
    buttonContainer:{
        flexDirection: 'row',
        padding: 10
    },
    cancelWorkoutButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'firebrick',
        elevation: 3,
        marginRight: 5,
    },
    cancelWorkoutButtonText: {
        color: 'white',
        fontSize: 20
    },
    finishWorkoutButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: PRIMARY_COLOR,
        elevation: 3,
        marginLeft: 5
    },
    finishWorkoutButtonText: {
        color: 'white',
        fontSize: 20
    },
});