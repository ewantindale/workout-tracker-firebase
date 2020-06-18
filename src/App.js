import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { PRIMARY_COLOR } from './constants';

// Screens
import WorkoutList from './screens/WorkoutList';
import NewWorkout from './screens/NewWorkout';
import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import WorkingWeights from './screens/WorkingWeights';
import SetStartingWeights from './screens/SetStartingWeights';


const Stack = createStackNavigator();

export default function App() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userData, setUserData] = useState(); 

    function onAuthStateChanged(user) {
        setUser(user);

        const initialUserData = {
            newUserSetupCompleted: false,
            nextWorkoutInCycle: 0,
            workingWeights: {
                'Barbell Row': null, 
                'Bench Press': null, 
                'Bench Press 12': null, 
                'Calf Raise': null, 
                'Deadlift': null, 
                'Dumbbell Curl': null, 
                'Face Pull': null, 
                'Hammer Curl': null, 
                'Incline Dumbbell Press': null, 
                'Lateral Raise': null, 
                'Leg Curl': null, 
                'Leg Press': null, 
                'Overhead Press': null, 
                'Overhead Press 12': null, 
                'Overhead Tricep Extension': null, 
                'Pullup': null, 
                'Romanian Deadlift': null, 
                'Seated Cable Row': null, 
                'Squat': null, 
                'Tricep Pushdown': null
            }
        }

        if(user) {
            const userRef = firestore().collection('users').doc(user.uid)
            userRef.get().then(doc => {
                if (!doc.exists) {
                    userRef.set(initialUserData);
                }
            })
        }
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    useEffect(() => {
        if (user){
            const userRef = firestore().collection('users').doc(user.uid)
            return userRef.onSnapshot(doc => {
                if (doc.exists){
                    setUserData(doc.data());
                }
            });
        }
    });

    if (initializing) return null;

    return (
        <NavigationContainer theme={DefaultTheme}>
            <Stack.Navigator initialRouteName='WorkoutList' screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle:{
                    backgroundColor: PRIMARY_COLOR,
                }
            }}>
                {
                    !user ? (
                        <Stack.Screen name='Welcome' component={Welcome}/>
                    ) : (
                        userData && !userData.newUserSetupCompleted ? (
                            <Stack.Screen 
                                name='SetStartingWeights'
                                component={SetStartingWeights}
                                initialParams={{ 
                                    uid: user.uid,
                                    workingWeights: userData.workingWeights
                                }}
                            />
                        ) : (
                            <>
                                <Stack.Screen 
                                    name='WorkoutList'
                                    component={WorkoutList}
                                    initialParams={{ 
                                        uid: user.uid,
                                        photoURL: user.photoURL,
                                    }}
                                />
                                <Stack.Screen 
                                    name='NewWorkout' 
                                    component={NewWorkout}
                                    initialParams={{ 
                                        uid: user.uid
                                    }}    
                                />
                                <Stack.Screen 
                                    name='Profile' 
                                    component={Profile}
                                    initialParams={{ 
                                        photoURL: user.photoURL,
                                        name: user.displayName,
                                        email: user.email
                                    }}
                                />
                                <Stack.Screen 
                                    name='WorkingWeights' 
                                    component={WorkingWeights}
                                />
                            </> 
                        )
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}