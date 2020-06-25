import React from "react";
import { Text, StyleSheet } from "react-native";

const FontText = (props) => <Text style={styles.body}>{props.children}</Text>;

const styles = StyleSheet.create({
	body:{
		fontFamily:'Academy Engraved LET'
	}
});

export default FontText;
