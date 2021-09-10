import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, ActivityIndicator } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { AuthContext } from "./components/context";

export default function App() {
	// const isLoadingComplete = useCachedResources();
	// const colorScheme = useColorScheme();

	const [isLoading, setIsLoading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(null);

	const authContext = React.useMemo(() => ({
		signIn: () => {
			setUserToken("fgkj");
			setIsLoading(false);
		},
		signOut: () => {
			setUserToken(null);
			setIsLoading(false);
		},
	}));

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" />
			</View>
		);
	} else {
		return (
			<AuthContext.Provider value={authContext}>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</AuthContext.Provider>
		);
	}
}
