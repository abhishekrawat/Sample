import React from "react";
import {
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Button,
	Dimension,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../components/context";

const LoginScreen = ({ navigation }) => {
	const [data, setData] = React.useState({
		email: "",
		password: "",
		check_textInputChange: false,
		secureTextEntry: true,
	});

	const { signIn } = React.useContext(AuthContext);

	const textInputChange = (val) => {
		if (val.length != 0) {
			setData({
				...data,
				email: val,
				check_textInputChange: true,
			});
		} else {
			setData({
				...data,
				email: val,
				check_textInputChange: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		if (val.trim().length >= 8) {
			setData({
				...data,
				password: val,
				isValidPassword: true,
			});
		} else {
			setData({
				...data,
				password: val,
				isValidPassword: false,
			});
		}
	};
	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	return (
		<KeyboardAvoidingView
			behavior="padding"
			keyboardVerticalOffset={20}
			style={styles.container}
		>
			<View style={styles.footer}>
				<View style={styles.action}>
					<Ionicons name="person-outline" size={24} color="grey" />
					<TextInput
						placeholder="Enter email"
						style={styles.input}
						// autoFocus={true}
						keyboardType="email-address"
						required
						errorMessage="Please enter a valid email"
						autoCapitalize="none"
						onChangeText={(val) => textInputChange(val)}
					></TextInput>
					{data.check_textInputChange ? (
						<View>
							<Ionicons
								name="checkmark-circle-outline"
								color="green"
								size={20}
							/>
						</View>
					) : null}
				</View>
				<View style={styles.action}>
					<Ionicons name="lock-closed-outline" size={24} color="grey" />
					<TextInput
						placeholder="Enter password"
						style={styles.input}
						secureTextEntry={data.secureTextEntry ? true : false}
						keyboardType="default"
						required
						errorMessage="Please enter a valid email"
						onChangeText={(val) => handlePasswordChange(val)}
					></TextInput>
					<TouchableOpacity onPress={updateSecureTextEntry}>
						{data.secureTextEntry ? (
							<Ionicons name="eye-off-outline" color="green" size={20} />
						) : (
							<Ionicons name="eye-outline" color="green" size={20} />
						)}
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() => {
						signIn();
					}}
				>
					{/* <TouchableOpacity onPress={() => navigation.replace("TabOne")}> */}
					<View style={styles.button}>
						<Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
					</View>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: "20%",
		backgroundColor: "#ffffff",
	},
	content: {
		marginHorizontal: 20,
		backgroundColor: "#ffffff",
	},
	input: {
		borderRadius: 4,
		borderColor: "#D6D6D6",
		height: 54,
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -12,
		paddingLeft: 10,
		color: "#05375a",
	},
	button: {
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		margin: 10,
		height: 54,
		backgroundColor: "#2654FD",
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f2f2",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -12,
		paddingLeft: 10,
		color: "#05375a",
	},
	footer: {
		flex: 3,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
});
