import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (props) => {
	return(
		<View style={styles.header}> 
			<Text style ={styles.title}>
				{props.title}
			</Text>
		</View>
	)

}

const styles = StyleSheet.create({
	header:{
		width:'100%',
		height:90,
		paddingTop:'36',
		backgroundColor:'rgb(215, 181, 107)'
	},
	title:{

	}
})