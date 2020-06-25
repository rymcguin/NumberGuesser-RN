import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import Colors from '../constants/colors'

const EndScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.card}>Your Number Was: <Text style={styles.highlight}>{props.userNumber}</Text></Text>
        <Text style={styles.card}>Number of Rounds: <Text  style={styles.highlight}>{props.numRounds} </Text></Text>
        <MyButton onPress={props.onRestart}>NEW GAME</MyButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
	alignItems: "center",
	padding:2,
	marginHorizontal:20,
	
  },
  title: {
    justifyContent: "center",
	alignItems: "center",
	fontWeight:"700",
	fontSize:20,
	margin:10,
  },
  highlight:{
	  color:Colors.primary,
	  fontWeight:'700'
  }
});

export default EndScreen;
