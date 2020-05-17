import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button, 
  FlatList,
  Text,
} from 'react-native';

import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isClearable, setIsClearable] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
      ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId); 
    });
  };

  const deleteAllGoals = () => {
    setCourseGoals([]);
    setIsClearable(false);
  };

  const clearButtonVisible = () => {
    setIsClearable(Object.keys(courseGoals).length > 0 ? true : false);
  };

  const cancelGoalInput = () => {
    setIsAddMode(false);
  };


  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>Shopping List</Text>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalInput} 
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
      <View style={styles.buttonMenu}>
        <Button 
          title="Add Grocery Item" 
          onPress={()=> setIsAddMode(true)} 
        />
        <Button 
          visible={isClearable} 
          color="red" 
          title="Clear All" 
          onPress={deleteAllGoals}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    alignItems: 'center',
    paddingBottom: 50
  },
  clear: {
    paddingTop: 100,
    color: 'red',
  },
  buttonMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  headerText: {
    fontSize: 20,
    marginVertical:20,
  },

});




