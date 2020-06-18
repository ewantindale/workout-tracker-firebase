import React, {useState} from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { PRIMARY_COLOR } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SetWorkingWeightModal({ exerciseName, initialValue, visible, setModalVisible, submitSetWorkingWeightModal}) {

    const [value, setValue] = useState(initialValue);

    function onCancelPressed() {
        setModalVisible(false);
    }

    function onConfirmPressed() {
        submitSetWorkingWeightModal(value);
        setModalVisible(false);
    }

    function onIncrementPressed() {
        setValue(parseFloat(value + 2.5));
    }

    function onDecrementPressed() {
        if (value >= 2.5) {
            setValue(parseFloat(value - 2.5));
        } else {
            setValue(0);
        }
    }

    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitleText}>Set {exerciseName} Working Weight</Text>
                    <View style={styles.outerTextInputView}>
                        <TouchableOpacity style={styles.decrementButton} onPress={onDecrementPressed}>
                            <Icon name='remove' size={30} color={PRIMARY_COLOR}/>
                        </TouchableOpacity>
                            <View style={styles.textInputView}>
                                <TextInput
                                    value={value ? value.toString() : '0'}
                                    onChangeText={(input) => setValue(parseFloat(input))}
                                    keyboardType='number-pad'
                                    selectTextOnFocus={true}
                                    /* autoFocus={true} */
                                    style={styles.textInput}
                                    maxLength={5}
                                />
                            </View>
                        <TouchableOpacity style={styles.incrementButton} onPress={onIncrementPressed}>
                            <Icon name='add' size={30} color={PRIMARY_COLOR}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onCancelPressed}>
                            <Text style={styles.cancelButtonText}>CANCEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={onConfirmPressed}>
                            <Text style={styles.confirmButtonText}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000080',
        paddingHorizontal: 25
    },
    modalTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    modalView: {
        backgroundColor: 'white',
        padding: 10,
        elevation: 5
    },
    outerTextInputView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textInputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    kgText: {
        fontSize: 18
    },
    textInput: {
        textAlign: 'center',
        fontSize: 20
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cancelButtonText: {
        padding: 10,
        color: 'firebrick',
        fontSize: 18
    },
    confirmButtonText: {
        padding: 10,
        color: PRIMARY_COLOR,
        fontSize: 18
    },
    decrementButton: {
        padding: 10
    },
    incrementButton: {
        padding: 10
    }
})