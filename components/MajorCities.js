const data = {
  labels: ["0", "51", "101", "151", "201", "301+"],
  legend: [
    "Good",
    "Moderate",
    "Unhealthy for Sensitive Groups",
    "Unhealthy",
    "Very Unhealthy",
    "Hazardous",
  ],
  data: [
    [50],
    [null, 100],
    [null, null, 150],
    [null, null, null, 200],
    [null, null, null, null, 300],
    [null, null, null, null, null, 500],
  ],
  barColors: [
    "#2bba53",
    "#f0c905",
    "#d46300",
    "#ff0000",
    "#ad58cc",
    "#696969",
  ],
};

<Text>Air Quality Index Graph</Text>
        <StackedBarChart
          // style={graphStyle}
          data={data}
          width={420}
          height={380}
          chartConfig={{
            backgroundColor: "#d6eef8",
            backgroundGradientFrom: "#d6eef8",
            backgroundGradientTo: "#d6eef8",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0, 0, 0, ${1})`,
          }}
        />