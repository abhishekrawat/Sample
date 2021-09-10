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

// Later replace this data with API
const data = [
	{
		id: 1,
		name: "Card 1",
		screen: "Chart",
		description: "Card description",
		cardColor: { backgroundColor: "#AFF3C2" },
	},
	{
		id: 2,
		name: "Card 2",
		screen: "Chart2",
		description: "Card description",
		cardColor: { backgroundColor: "#EFE0C4" },
	},
	{
		id: 3,
		name: "Card 3",
		screen: "Chart3",
		description: "Card description",
		cardColor: { backgroundColor: "#ACE4F4" },
	},
];

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={[item.cardColor, styles.cardBody]}
				onPress={() => {
					navigation.navigate(item.screen, { item });
				}}
			>
				<View style={{}}>
					<Text style={styles.cardTitle}>{item.name}</Text>
					<Text style={styles.description}>{item.description}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Cards</Text>
				<FlatList
					renderItem={renderItem}
					data={data}
					keyExtractor={(item) => String(item.id)}
				></FlatList>
			</SafeAreaView>
		</View>
	);
}
//Fix the shadow gettin cut for cards!!

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
		marginVertical: 8,
		marginHorizontal: 24,
		height: "100%",
	},

	title: {
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 24,
		marginBottom: 20,
	},

	cardBody: {
		height: 100,
		marginVertical: 6,
		padding: 16,
		borderRadius: 14,
		shadowColor: "#2A4A51", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 0.1, // IOS
		shadowRadius: 5, //IOS
		overflow: "visible",
		elevation: 3,

		justifyContent: "center",
	},
	cardTitle: {
		paddingHorizontal: 10,
		marginVertical: 4,
		fontSize: 16,
		fontWeight: "bold",
		color: "#2A4A51",
	},
	description: {
		paddingHorizontal: 10,
		marginVertical: 1,
		fontSize: 14,
		color: "#2A4A51",
	},
});
