import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { ProgressCircle } from "react-native-svg-charts";

class CaliforniaMajorCities extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const cityColor = [];
    for (let i = 0; i < this.props.data.length; i++) {
      let cityData = [null, null, null, null, null, null];
      const aqi = this.props.data[i][0];
      if (aqi <= 50) {
        cityData[0] = aqi;
        cityColor.push(cityData);
      } else if (aqi <= 100) {
        cityData[1] = aqi;
        cityColor.push(cityData);
      } else if (aqi <= 150) {
        cityData[2] = aqi;
        cityColor.push(cityData);
      } else if (aqi <= 200) {
        cityData[3] = aqi;
        cityColor.push(cityData);
      } else if (aqi <= 300) {
        cityData[4] = aqi;
        cityColor.push(cityData);
      } else {
        cityData[5] = aqi;
        cityColor.push(cityData);
      }
    }
    const data = {
      labels: ["Ana", "LA", "Sac", "SD", "SJ", "SF"],
      data: cityColor,
      barColors: [
        "#2bba53",
        "#f0c905",
        "#d46300",
        "#ff0000",
        "#ad58cc",
        "#696969",
      ],
    };
    return (
      <View style={text}>
        <StackedBarChart
          // style={graphStyle}
          data={data}
          width={420}
          height={300}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0, 0, 0, ${1})`,
          }}
          showLegend={false}
        />
      </View>
    );
  }
}

export default CaliforniaMajorCities;

// http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zipcode}&date=${date}&distance=25&API_KEY=${config.token}

const text = { alignItems: "center", justifyContent: "center", left: 30 };
const horizontal = { flexDirection: "row" };
const buttonStyle = { width: 100, height: 50 };
const searchBarStyle = { width: 300, height: 50 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
