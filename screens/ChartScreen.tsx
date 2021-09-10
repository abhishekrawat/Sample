import * as React from "react";
import { WebView } from "react-native-webview";
import StyleSheet from "react-native";

export default function ChartScreen() {
	return <WebView source={{ uri: "https://covid19.ncema.gov.ae/en" }} />;
}
