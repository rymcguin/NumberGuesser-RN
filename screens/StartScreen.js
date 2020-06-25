import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MyButton from "../components/MyButton";

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmedState] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmedState(false);
    Keyboard.dismiss();
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number must be between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmedState(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.numCard}>
        <Text>Chosen Number:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MyButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MyButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.input}>
          <Text>Select a Number</Text>
          <Input
            style={styles.inputText}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttons}>
            <Button
              title="Reset"
              onPress={() => {
                resetInputHandler();
              }}
              color={Colors.secondary}
            />
            <Button
              title="Confirm"
              onPress={() => {
                confirmInputHandler();
              }}
              color={Colors.primary}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  inputText: {
    width: 50,
    textAlign: "center",
  },
  numCard: {
    margin: 10,
    alignItems: "center",
  },
});
export default StartScreen;
