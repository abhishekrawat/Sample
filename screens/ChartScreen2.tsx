import React from "react";
import { StyleSheet, View } from "react-native";
import {
	VictoryBar,
	VictoryChart,
	VictoryTheme,
	VictoryStack,
	VictoryHistogram,
} from "victory-native";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
];

export default class ChartScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<VictoryChart>
					<VictoryStack colorScale="qualitative">
						<VictoryHistogram
							data={[
								{ x: 0 },
								{ x: 1 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 5 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 7 },
								{ x: 7 },
								{ x: 10 },
								{ x: 0 },
								{ x: 1 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 5 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 7 },
								{ x: 7 },
								{ x: 10 },
								{ y: 20 },
							]}
						/>

						<VictoryHistogram
							cornerRadius={3}
							animate={{
								duration: 2000,
								onLoad: { duration: 1000 },
							}}
							data={[
								{ x: 0 },
								{ x: 1 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 5 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 7 },
								{ x: 7 },
								{ x: 10 },
								{ x: 0 },
								{ x: 1 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 5 },
								{ x: 2 },
								{ x: 3 },
								{ x: 4 },
								{ x: 7 },
								{ x: 7 },
								{ x: 10 },
							]}
						/>
					</VictoryStack>
				</VictoryChart>
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
