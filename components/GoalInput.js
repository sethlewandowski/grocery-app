import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => { //func receives data input and updates state
    	setEnteredGoal(enteredText);
  	};

  const addGoalHandler = () => {
  	props.onAddGoal(enteredGoal);
  	setEnteredGoal('');

  };

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Text style={styles.headerText}>Add A Grocery Item!</Text>
				<TextInput 
			  		placeholder="Whatcha Need???" 
			  		style={styles.input}
			  		onChangeText={goalInputHandler} //enter a key, it calls goalInputHandler
			  		value={enteredGoal}
				/>
				<View style={styles.buttonMenu}>
					<View style={styles.button}>
						<Button title="Cancel" color="red" onPress={props.onCancel} />
					</View>
					<View style={styles.button}>
						<Button title="Add it!" onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
		);
};

const styles = StyleSheet.create({
	headerText: {
		fontSize: 20,
		marginVertical:20,
	},
	inputContainer: {
		flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  	},
 	 input: {
    	borderRadius: 100,
    	width: '80%', // Percent is of parent of the item
    	borderColor: 'black',
    	borderWidth: 1,
    	padding: 10,
    	marginBottom: 10,
  	},
	buttonMenu: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
	},
	button: {
		width: '40%'
	}
});

export default GoalInput;
