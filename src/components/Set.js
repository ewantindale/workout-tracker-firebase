import React, { Component } from "react";
import { 
    View,
    TextInput
} from "react-native";

import { connect } from 'react-redux'
import { updateSet } from '../redux'
import { PRIMARY_COLOR } from "../constants";

class Set extends Component {

    state = {
        reps: this.props.item.completed_reps,
        isFocused: false
    }

    updateSet = () => {
        this.props.dispatch(updateSet(parseInt(this.state.reps), this.props.index, this.props.exercise_index))
    }

    handleFocus = () => this.setState({
        reps: this.state.reps,
        isFocused: true
    })

    handleBlur = () => this.setState({
        reps: this.state.reps,
        isFocused: false
    })

    render() {
        return (
            <View>
                <TextInput style={{ 
                        padding: 10,
                        fontSize: 20, 
                        backgroundColor: this.props.item.completed_reps != null ? PRIMARY_COLOR : '#ebebeb',
                        color: this.props.item.completed_reps != null ? 'white' : PRIMARY_COLOR,
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderColor: this.state.isFocused ? PRIMARY_COLOR : this.props.item.completed_reps ? PRIMARY_COLOR : '#ebebeb',
                        borderWidth: 1
                    }}
                    textAlign='center'
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChangeText={(reps) => this.setState({reps})}
                    value={this.state.reps != null ? this.state.reps.toString() : ''}
                    selectTextOnFocus={true}
                    maxLength={2}
                    onSubmitEditing={this.updateSet}
                    placeholder={(this.props.item.amrap) ? this.props.item.goal_reps.toString() + '+' : this.props.item.goal_reps.toString()}
                    keyboardType='number-pad'
                />
            </View>
            
        );
    }
}
export default connect()(React.memo(Set));