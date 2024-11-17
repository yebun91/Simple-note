import { Pressable, StyleSheet, Text, View, Modal } from "react-native";
import { Goal } from "../App";

const GoalItem = ({
  item,
  deleteGoal,
}: {
  item: Goal;
  deleteGoal: (goal: Goal) => void;
}) => {
  const deleteButtonPress = () => {
    deleteGoal(item);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#33125f" }}
        onPress={deleteButtonPress}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#ffffff",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
});
