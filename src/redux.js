import { createStore, combineReducers } from 'redux';
import workoutTemplates from './workoutTemplates';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const startWorkout = (day = 0, workingWeights) => ({
    type: 'START_WORKOUT',
    day,
    workingWeights
});

export const updateWorkingWeight = (weight, exercise_index) => ({
    type: 'UPDATE_WORKING_WEIGHT',
    weight,
    exercise_index
});

export const updateSet = (reps, set_index, exercise_index) => ({
    type: 'UPDATE_SET',
    reps,
    set_index,
    exercise_index
});

export const finishWorkout = () => ({
    type: 'FINISH_WORKOUT',
});

export const cancelWorkout = () => ({
    type: 'CANCEL_WORKOUT',
});

// reducers

const currentWorkout_initial_state = {
    inProgress: false,
    workout: {}
}

function currentWorkout(state = currentWorkout_initial_state, action){
    switch(action.type) {
        case 'START_WORKOUT':
            const new_workout = workoutTemplates(action.day);
            new_workout.exercises = new_workout.exercises.map(exercise => ({
                ...exercise,
                weight: action.workingWeights[exercise.name] ? action.workingWeights[exercise.name] : 0
            }))
            return {
                workout: {
                    ...new_workout,
                },
                inProgress: true
            };
        case 'UPDATE_SET':
            const newState = state
            newState.workout.exercises[action.exercise_index].sets[action.set_index].completed_reps = action.reps
            return newState;
        case 'UPDATE_WORKING_WEIGHT':
            const newState2 = state
            newState2.workout.exercises[action.exercise_index].weight = action.weight
            return newState2;
        case 'FINISH_WORKOUT':
            return currentWorkout_initial_state;
        case 'CANCEL_WORKOUT':
            return currentWorkout_initial_state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    currentWorkout
});

let store = createStore(rootReducer);

export { store }