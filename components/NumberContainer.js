import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 20,
    color: Colors.primary,
  },
});

export default NumberContainer;
