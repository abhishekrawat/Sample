import React, { useState } from "react";
import {
	StyleSheet,
	StatusBar,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	Animated,
	ScrollView,
	View,
	FlatList,
} from "react-native";
import { Text } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Settings</Text>
				<Text style={styles.body}>This screen is WIP</Text>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		marginVertical: 8,
		marginHorizontal: 16,
	},

	title: {
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 24,
		marginBottom: 20,
	},
	input: {
		backgroundColor: "#f2f2f2",
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		marginVertical: 10,
	},
	body: {
		alignItems: "center",
		justifyContent: "center",
	},
	cardBody: {
		height: 120,
		marginVertical: 6,
		padding: 16,
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "#2A4A51", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 0.1, // IOS
		shadowRadius: 5, //IOS
		overflow: "visible",
	},
});
