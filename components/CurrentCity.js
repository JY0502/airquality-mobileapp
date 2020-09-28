import React from "react";
import { StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ProgressCircle } from "react-native-svg-charts";

class CurrentCity extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.data, "data in currentCity");
    const AQI = this.props.data[0];
    const currentAQI = AQI / 250;
    let color = "#2bba53";
    const colors = [
      "#303030",
      "#ad58cc",
      "#ff0000",
      "#d46300",
      "#f0c905",
      "#2bba53",
    ];
    // const tomorrowAQI = this.props.data[2] / 500;
    if (50 < AQI && AQI <= 100) {
      color = colors[4];
    } else if (100 < AQI && AQI <= 150) {
      color = colors[3];
    } else if (150 < AQI && AQI <= 200) {
      color = colors[2];
    } else if (200 < AQI && AQI <= 300) {
      color = colors[1];
    } else if (300 < AQI) {
      color = colors[0];
    }
    return (
      <ProgressCircle
        style={{ height: 200 }}
        progress={currentAQI}
        progressColor={color}
        startAngle={-Math.PI * 0.8}
        endAngle={Math.PI * 0.8}
        strokeWidth={30}
      />
    );
  }
}

export default CurrentCity;
