import React from "react";
import { StyleSheet, View } from "react-native";
import {
	VictoryBar,
	VictoryChart,
	VictoryTheme,
	VictoryPie,
	Bar,
	VictoryTooltip,
} from "victory-native";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
];

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<VictoryPie
					colorScale="warm"
					radius={120}
					style={{ labels: { padding: 5, fontSize: 20 } }}
					data={[
						{ x: 1, y: 3, placement: "vertical" },
						{ x: 2, y: 4, placement: "parallel" },
						{ x: 3, y: 2, placement: "perpendicular" },
					]}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5fcff",
	},
});
