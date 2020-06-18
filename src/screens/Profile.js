import React from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';

export default function Profile({ route }) {

    const {name, email, photoURL} = route.params;

    function onSignOutButtonPressed() {
        Alert.alert('', 'Are you sure you want to sign out?',
        [
            {
                text: 'Yes', onPress:() => {
                    auth().signOut()
                }
            },
            {
                text: 'No'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image 
                    style={{ 
                        width: 100, 
                        height: 100, 
                        borderRadius: 100,
                        alignSelf: 'center',
                        margin: 25
                    }} 
                    source={{ uri: photoURL }}
                />
                <Text>Signed in as {name}</Text>
                <Text>Email: {email}</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.signOutButton} onPress={onSignOutButtonPressed}>
                    <Text style={styles.signOutButtonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    profileContainer: {
        marginTop: 50,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 25
    },
    signOutButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#171717'
    },
    signOutButtonText: {
        color: 'white',
        fontSize: 20,
    }
});