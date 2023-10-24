import { useState } from 'react';
import { StyleSheet, Text, View, Button,  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

 
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(
      (currentGoals) => 
      [...currentGoals, 
        {text: enteredGoalText, id: Math.random().toString()} 
      ])
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(
      (currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== id)
      }
    )
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='orange' onPress={startAddGoalHandler}/>
       <GoalInput 
       onAddGoal={addGoalHandler} 
       visible={modalIsVisible} 
       onEndAddGoal={endAddGoalHandler}
       />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals}
        renderItem={ (itemData) => {
          return(
           <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
          />
          )
        }}
        keyExtractor={(item, index) => item.id}
        alwaysBounceVertical={false} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#311b6b',
  },
  goalsContainer: {
    flex: 5,
  },

});
