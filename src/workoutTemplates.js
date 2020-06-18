export default workoutTemplates = (day) => {
    switch(day){
        case 0:
            return {
                name: 'Push Day (A)',
                exercises:[
                    {
                        name: 'Bench Press',
                        sets:   [
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                        ]
                    },
                    {
                        name: 'Overhead Press 12',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Tricep Pushdown',                       
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Overhead Tricep Extension',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    { 
                        name: 'Lateral Raise',
                        sets:   [
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                        ]
                    },
    
                ]
            }
        case 1:
            return {
                name: 'Pull Day (A)',
                exercises:[
                    {
                        name: 'Deadlift',
                        sets:   [
                            { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                        ]
                    },
                    {  
                        name: 'Pullup',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Seated Cable Row',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {  
                        name: 'Face Pull',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {   
                        name: 'Hammer Curl',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    { 
                        name: 'Dumbbell Curl',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                ]
            }
        case 2:
            return {
                name: 'Leg Day (A)',
                exercises:[
                    {
                        name: 'Squat',
                        sets:   [
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                        ]
                    },
                    {                    
                        name: 'Romanian Deadlift',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {                    
                        name: 'Leg Press',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    { 
                        name: 'Leg Curl',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Calf Raise',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    }
                ]
            }
        case 3:
            return {
                name: 'Push Day (B)',
                exercises:[
                    {
                        name: 'Overhead Press',
                        sets:   [
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                        ]
                    },
                    {
                        name: 'Bench Press 12',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Tricep Pushdown',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Overhead Tricep Extension',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Lateral Raise',
                        sets:   [
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                            { goal_reps: 20, completed_reps: null, amrap: false },
                        ]
                    },
    
                ]
            }
        case 4:
            return {
                name: 'Pull Day (B)',
                exercises:[
                    {
                        name: 'Barbell Row',
                        sets:   [
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                        ]
                    },
                    {                    
                        name: 'Pullup',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {                    
                        name: 'Seated Cable Row',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {                    
                        name: 'Face Pull',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {                   
                        name: 'Hammer Curl',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Dumbbell Curl',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                ]
            }
        case 5:
            return {
                name: 'Leg Day (B)',
                exercises:[
                    {
                        name: 'Squat',
                        sets:   [
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: false },
                            { goal_reps: 5, completed_reps: null, amrap: true }, // AMRAP
                        ]
                    },
                    {
                        name: 'Romanian Deadlift',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {
                        name: 'Leg Press',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {  
                        name: 'Leg Curl',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    },
                    {    
                        name: 'Calf Raise',
                        sets:   [
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                            { goal_reps: 12, completed_reps: null, amrap: false },
                        ]
                    }
                ]
            }
    }
}
