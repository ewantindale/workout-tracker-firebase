import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { PRIMARY_COLOR } from '../constants';

GoogleSignin.configure({
    webClientId: '289674965756-qls759217t763jenk4co7vkp8t0k3slp.apps.googleusercontent.com',
});

async function onGoogleSignInPressed() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

export default function Welcome({navigation}) {
    navigation.setOptions({headerShown: false});

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="fitness-center" size={125} color="white" style={styles.icon}/>
                <Text style={styles.headerText}>
                    PPL Workout Tracker
                </Text>
                <Text style={styles.subHeaderText}>
                    Get Stronger and Build Muscle
                </Text>
                <GoogleSigninButton
                    style={{ width: 192, height: 48, marginTop: 10 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={onGoogleSignInPressed}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        alignItems:'center'
    },
    icon: {
        textShadowColor: '#00000080',
        textShadowRadius: 5,
        textShadowOffset: {
            width: 3, height: 3
        }
    },
    headerText: {
        color: 'white',
        fontSize: 35,
        textShadowColor: '#00000080',
        textShadowRadius: 5,
        textShadowOffset: {
            width: 3, height: 3
        }
    },
    subHeaderText: {
        color: 'white',
        fontSize: 18,
        textShadowColor: '#00000080',
        textShadowRadius: 5,
        textShadowOffset: {
            width: 3, height: 3
        }
    },
    getStartedButton: {
        padding: 15,
        backgroundColor: 'white',
        marginTop: 20
    },
    getStartedButtonText: {
        fontSize: 20,
        
        color: PRIMARY_COLOR
    }
});