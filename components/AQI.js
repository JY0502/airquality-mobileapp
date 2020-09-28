import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";

class AQI extends React.PureComponent {
  render() {
    const data = [
      {
        key: 1,
        amount: 50,
        svg: { fill: "#2bba53" },
        description: "Good",
      },
      {
        key: 2,
        amount: 50,
        svg: { fill: "#f0c905" },
        description: "Moderate",
      },
      {
        key: 3,
        amount: 50,
        svg: { fill: "#d46300" },
        description: "Little Unhealthy",
      },
      {
        key: 4,
        amount: 50,
        svg: { fill: "red" },
        description: "Unhealthy",
      },
      {
        key: 5,
        amount: 50,
        svg: { fill: "#ad58cc" },
        description: "Very Unhealthy",
      },
      {
        key: 6,
        amount: 50,
        svg: { fill: "#696969" },
        description: "Hazardous",
      },
    ];

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={"black"}
            textAnchor={"middle"}
            alignmentBaseline={"middle"}
            fontSize={11}
            stroke={"black"}
            strokeWidth={0.2}
          >
            {data.description}
          </Text>
        );
      });
    };
    return (
      <PieChart
        style={{ height: 350 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={"95%"}
        labelRadius={"100%"}
      >
        <Labels />
      </PieChart>
    );
  }
}

export default AQI;
// const AQI = (props) => {
//   const data = {
//     labels: ["0", "51", "101", "151", "201", "301+"],
//     legend: [
//       "Good",
//       "Moderate",
//       "Unhealthy for Sensitive Groups",
//       "Unhealthy",
//       "Very Unhealthy",
//       "Hazardous",
//     ],
//     data: [
//       [50],
//       [null, 100],
//       [null, null, 150],
//       [null, null, null, 200],
//       [null, null, null, null, 300],
//       [null, null, null, null, null, 500],
//     ],
//     barColors: [
//       "#2bba53",
//       "#f0c905",
//       "#d46300",
//       "#ff0000",
//       "#ad58cc",
//       "#696969",
//     ],
//   };

//   return (
//     <StackedBarChart
//       // style={graphStyle}
//       data={data}
//       width={420}
//       height={380}
//       chartConfig={{
//         backgroundColor: "#d6eef8",
//         backgroundGradientFrom: "#d6eef8",
//         backgroundGradientTo: "#d6eef8",
//         color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//         labelColor: (opacity = 0) => `rgba(0, 0, 0, ${1})`,
//       }}
//     />
//   );
// };

// export default AQI;
