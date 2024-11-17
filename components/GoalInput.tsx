import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import { Goal } from "../App";

type props = {
  addGoal: (goal: Goal) => void;
  visible: boolean;
  goalInputHandler: () => void;
};

const GoalInput = (props: props) => {
  const [value, setValue] = useState("");

  const goalInputGandler = (text: string) => {
    setValue(text);
  };

  const addGoalHandler = () => {
    props.addGoal({ text: value, id: Math.random().toString() });
    setValue("");
    props.goalInputHandler();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          placeholderTextColor="#ae80e9"
          onChangeText={goalInputGandler}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.goalInputHandler}
              color={"#f13b96"}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#ae80e9"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 10,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
