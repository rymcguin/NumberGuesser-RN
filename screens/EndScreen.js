import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import Colors from "../constants/colors";

const EndScreen = (props) => {
  return (
 
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.title}>Game Over</Text>
          <Text style={styles.text}>
            Your Number Was:{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </Text>
          <Text style={styles.text}>
            Number of Rounds:{" "}
            <Text style={styles.highlight}>{props.numRounds} </Text>
          </Text>
          <MyButton onPress={props.onRestart}>NEW GAME</MyButton>
        </Card>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
	flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
	alignItems: "center",
	width:"70%",
	height:'30%',
    padding: 2,
    marginHorizontal: 20,
  },
  text: {
    justifyContent: "center",
	alignItems: "center",
	fontSize: Dimensions.get('window').height > 800 ? 30:15 ,
    padding: 2,
    marginHorizontal: 20,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    fontSize: Dimensions.get('window').height > 800 ? 50:20,
    margin: 10,
  },
  highlight: {
    color: Colors.primary,
    fontWeight: "700",
  },
});

export default EndScreen;
