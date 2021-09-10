import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Text, TextProps } from "../components/Themed";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
	let backgroundColor;

	backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

	return (
		<View
			style={{
				width: 6,
				height: 6,
				marginHorizontal: 3,
				borderRadius: 20,
				backgroundColor,
			}}
		/>
	);
};

const Skip = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
		<Text style={{ fontSize: 18, color: "#fff" }}>Skip</Text>
	</TouchableOpacity>
);

const Next = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
		<Text style={{ fontSize: 18, color: "#fff" }}>Next</Text>
	</TouchableOpacity>
);

const Done = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
		<Text style={{ fontSize: 18, color: "#fff" }}>Done</Text>
	</TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
	return (
		<Onboarding
			SkipButtonComponent={Skip}
			NextButtonComponent={Next}
			DoneButtonComponent={Done}
			DotComponent={Dots}
			onSkip={() => navigation.replace("Login")}
			onDone={() => navigation.replace("Login")}
			pages={[
				{
					backgroundColor: "#032C63",
					image: (
						<Image source={require("../assets/images/onboarding-img1.png")} />
					),
					title: "Slide 1",
					subtitle: "Some description",
				},

				{
					backgroundColor: "#12A1A1",
					image: (
						<Image source={require("../assets/images/onboarding-img3.png")} />
					),
					title: "Slide 2",
					subtitle: "Some description",
				},
			]}
			containerStyles={{
				justifyContent: "center",
				alignItems: "center",
			}}
			imageContainerStyles={{
				alignItems: "center",
			}}
			titleStyles={{
				fontSize: 24,
				fontWeight: "bold",
			}}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
