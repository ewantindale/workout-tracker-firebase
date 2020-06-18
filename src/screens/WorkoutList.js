import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { startWorkout } from '../redux';
import firestore from '@react-native-firebase/firestore';
import WorkoutListItem from '../components/WorkoutListItem';
import { PRIMARY_COLOR } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '@react-navigation/native';

const workout_names_to_days = {
    'Push Day (A)': 0,
    'Pull Day (A)': 1,
    'Leg Day (A)': 2,
    'Push Day (B)': 3,
    'Pull Day (B)': 4,
    'Leg Day (B)': 5,
}

function WorkoutList({ route, navigation, startWorkout, currentWorkout }) {

    const { uid, photoURL } = route.params;

    const { colors } = useTheme();

    const [loading, setLoading] = useState(true);
    const [workouts, setWorkouts] = useState([]);
    const [userData, setUserData] = useState();

    const workoutsRef = firestore().collection('workouts').where('uid', '==', uid).orderBy('created');

    navigation.setOptions({
        title: 'Workout Log',
        headerRight: () => (
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', {workingWeights: userData.workingWeights})}>
                <Image 
                    style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: 40, 
                        marginRight: 10,
                        borderWidth: 2,
                        borderColor: 'white'
                    }} 
                    source={{ uri: photoURL }}
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('WorkingWeights', {workingWeights: userData.workingWeights})}>
                    <Icon name='menu' size={30} color='white' style={{marginRight: 10}}/>
                </TouchableOpacity>

            </View>
        )
    });

    useEffect(() => {
        return workoutsRef.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { name, created, exercises } = doc.data();
                list.push({
                    id: doc.id,
                    name,
                    created,
                    exercises
                });
            });

            setWorkouts(list);

            if (loading){
                setLoading(false);
            }
        });
    }, []);

    useEffect(() => {
        const userRef = firestore().collection('users').doc(uid)
        return userRef.onSnapshot(doc => {
            if (doc.exists){
                setUserData(doc.data());
            }
        });
    }, []);

    

    function dispatchStartWorkout() {
        startWorkout(userData.nextWorkoutInCycle, userData.workingWeights)
    }

    function onStartWorkoutButtonPressed() {
        if (!currentWorkout.inProgress) {
            dispatchStartWorkout()
        }
        navigation.navigate('NewWorkout', { userData: userData })
    }

    return (
        <View style={{flex: 1, backgroundColor: colors.card}}>
            {loading ? 
                <View style={styles.loadingContainer}>
                    <Text>Loading workouts...</Text>
                    <ActivityIndicator size='large'/>
                </View>
            : 
                <FlatList
                    data={workouts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <WorkoutListItem {...item}/>}
                    horizontal={true}
                />
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.newWorkoutButton} 
                    onPress={onStartWorkoutButtonPressed}
                >
                    <Text style={styles.newWorkoutButtonText}>
                        {currentWorkout.inProgress? 'Resume Workout' : 'Start Workout'}
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

function mapStateToProps(state){
    return {
        currentWorkout: state.currentWorkout
    };
};

const mapDispatchToProps = {
    startWorkout
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 10,
        flex: 1,
        justifyContent:'flex-end'
    },
    newWorkoutButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: PRIMARY_COLOR,
        elevation: 3,
    },
    newWorkoutButtonText: {
        color: 'white',
        fontSize: 20
    },
});