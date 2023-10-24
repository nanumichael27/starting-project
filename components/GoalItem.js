import { View, Text, Pressable, StyleSheet } from 'react-native';


function GoalItem({text, onDeleteItem, id}) {
    return (
        
            <View style={styles.goalItem}>
                <Pressable 
                android_ripple={{color: '#ddd'}} 
                onPress={onDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                <Text style={styles.goalText}>{text}</Text> 
                </Pressable>
            </View>
        
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: 'orange',
        shadowColor: 'black',
      },
      goalText: {
        color: 'white',
        padding: 8,
      },
      pressedItem: {
        opacity: 0.5,
      }
})