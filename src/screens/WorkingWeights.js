import React from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { PRIMARY_COLOR } from '../constants';

export default function WorkingWeights({ route, navigation}) {

    navigation.setOptions({title: 'Working Weights'})

    const {workingWeights} = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={Object.keys(workingWeights)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => 
                    <View style={styles.workingWeightContainer}>
                        <Text style={styles.workingWeightText}>{item}: {workingWeights[item]}kg</Text>
                    </View>
                }
            />
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    workingWeightContainer: {
        padding: 10,
        borderBottomWidth: 1
    },
    workingWeightText: {
        fontSize: 18
    },
    signOutButton: {
        padding: 10,
    },
    signOutButtonText: {
        color: PRIMARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    }
});