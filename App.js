import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import moment from "moment";
import config from "./api.js";
const date = moment().format().slice(0, 10);
import CaliforniaMajorCities from "./components/CaliforniaMajorCities.js";
import { SearchBar } from "react-native-elements";
import CurrentCity from "./components/CurrentCity.js";
import AQI from "./components/AQI.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currenCityData: [],
      currenCity: false,
      majorCities: false,
      search: "",
      currentZipcode: 0,
    };
    this.getAQIHandler = this.getAQIHandler.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  getAQIHandler() {
    let zipcode = this.state.search;
    zipcode = parseInt(zipcode);
    // console.log(typeof zipcode);
    if (!zipcode || zipcode < 10000 || zipcode > 99999) {
      alert("Please enter a valid zip code");
      return;
    }
    axios
      .get(
        `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipcode}&distance=25&API_KEY=${config.token}`
      )
      .then((res) => {
        // if (!res.data[1]) {
        //   alert(
        //     "Sorry, cannot find information.\n Please try different Zip Code"
        //   );
        //   return;
        // }
        return [res.data[1].AQI, res.data[1].Category.Name];
      })
      .catch((error) => {
        console.log(error);
        // alert(
        //   "Sorry, cannot find information.\n Please try different Zip Code"
        // );
        // return;
      })
      .then((data) => {
        // console.log(data, "hello");
        // axios
        //   .get(
        //     `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zipcode}&date=${date}&distance=25&API_KEY=${config.token}`
        //   )
        //   .then((res) => {
        //     console.log(res.data[6], "datadata");
        //     data.push(res.data[6].AQI, res.data[6].Category.Name);
        //     console.log(data, "data1");
        //     this.setState({
        //       currentCityData: data,
        //       currentCity: true,
        //       majorCities: false,
        //       search: "",
        //     });
        //     return data;
        //   })
        //   .catch((error) => {
        //     console.log("error");
        //     // alert(
        //     //   "Sorry, cannot find information.\n Please try different Zip Code"
        //     // );
        //     // return;
        //   })
        //   .then((allData) => {
        //     console.log(allData, "data2", data);
        //   });
        if (!data) {
          alert(
            "Sorry, cannot find information.\n Please try different Zip Code"
          );
          return;
        }
        this.setState({
          currentCityData: data,
          currentCity: true,
          majorCities: false,
          search: "",
          currentZipcode: this.state.search,
        });
      });
  }

  componentDidMount() {
    const data = [];
    axios
      .get(
        `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=92802&distance=25&API_KEY=${config.token}`
      )
      .then((res) => {
        data.push([res.data[1].AQI, res.data[1].Category.Name]);
        return data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        axios
          .get(
            `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=90014&distance=25&API_KEY=${config.token}`
          )
          .then((res) => {
            data.push([res.data[1].AQI, res.data[1].Category.Name]);
            return data;
          })
          .catch((error) => {
            console.log(error);
          })
          .then((data) => {
            axios
              .get(
                `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=95814&distance=25&API_KEY=${config.token}`
              )
              .then((res) => {
                data.push([res.data[1].AQI, res.data[1].Category.Name]);
                return data;
              })
              .catch((error) => {
                console.log(error);
              })
              .then((data) => {
                axios
                  .get(
                    `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=92132&distance=25&API_KEY=${config.token}`
                  )
                  .then((res) => {
                    data.push([res.data[1].AQI, res.data[1].Category.Name]);
                    return data;
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                  .then((data) => {
                    axios
                      .get(
                        `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=95113&distance=25&API_KEY=${config.token}`
                      )
                      .then((res) => {
                        data.push([res.data[1].AQI, res.data[1].Category.Name]);
                        return data;
                      })
                      .catch((error) => {
                        console.log(error);
                      })
                      .then((data) => {
                        axios
                          .get(
                            `http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=94108&distance=25&API_KEY=${config.token}`
                          )
                          .then((res) => {
                            data.push([
                              res.data[1].AQI,
                              res.data[1].Category.Name,
                            ]);
                            return data;
                          })
                          .catch((error) => {
                            console.log(error);
                          })
                          .then((data) => {
                            this.setState({
                              data: data,
                              majorCities: true,
                            });
                          });
                      });
                  });
              });
          });
      });
  }

  render() {
    const { search } = this.state;
    return (
      <View>
        <Text />
        <Text />
        <Text />
        <View style={horizontal}>
          <View style={searchBarStyle}>
            <SearchBar
              placeholder="Enter Zip Code Here..."
              onChangeText={this.updateSearch}
              value={search}
              searchIcon={null}
            />
          </View>
          <View style={(buttonStyle, text)}>
            <Button
              color="#999999"
              title="Search"
              onPress={this.getAQIHandler}
            />
          </View>
        </View>
        <Text style={right}>Last Updated: {date} </Text>
        <Text />
        {this.state.currentCity ? (
          <View style={text}>
            <Text>Zip Code: {this.state.currentZipcode}</Text>
          </View>
        ) : null}
        {this.state.majorCities ? (
          <View style={text}>
            <Text>Air Quality of 6 Major Cities in California</Text>
          </View>
        ) : null}
        {this.state.currentCity ? (
          <View style={text}>
            <Text>Current AQI: {this.state.currentCityData[0]}</Text>
          </View>
        ) : null}
        <Text />
        {this.state.majorCities ? (
          <CaliforniaMajorCities data={this.state.data} />
        ) : null}
        {this.state.currentCity ? (
          <CurrentCity data={this.state.currentCityData} />
        ) : null}
        {this.state.currentCity ? (
          <View style={text}>
            <Text>{this.state.currentCityData[1]}</Text>
          </View>
        ) : null}
        {this.state.currentCity ? (
          <View style={text}>
            <Text></Text>
            <Text></Text>
          </View>
        ) : null}
        <Text></Text>
        <View style={text}>
          <Text>Air Quality Index Color Code</Text>
        </View>
        <Text></Text>
        <AQI />
      </View>
    );
  }
}
const right = { textAlign: "right", paddingRight: 5 };
const text = {
  alignItems: "center",
  justifyContent: "center",
};
const horizontal = { flexDirection: "row", backgroundColor: "#333333" };
const buttonStyle = { width: 100, height: 70 };
const searchBarStyle = { width: 340, height: 70 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
