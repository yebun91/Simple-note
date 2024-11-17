import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export type Goal = {
  text: string;
  id: string;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  const goalInputHandler = () => {
    setModalVisible((prev) => !prev);
  };

  const addGoal = (goal: Goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const deleteGoal = (goal: Goal) => {
    setGoals((prev) => prev.filter((prevGoal) => prevGoal.id !== goal.id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a06be6"
          onPress={goalInputHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            addGoal={addGoal}
            goalInputHandler={goalInputHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={(items) => (
              <GoalItem item={items.item} deleteGoal={deleteGoal} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
