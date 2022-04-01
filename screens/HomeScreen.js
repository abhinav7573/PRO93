import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";

const bgImage = require("../assets/images/background.jpg");
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      //   img: require("../assets/images/morning-sun.jpg"),
      img: "morning-sun.jpg",
    };
  }
  getHour = () => {
    var h = new Date().getHours();
    this.setState({ time: h });
    console.log(this.state.time);
    switch (h) {
      case 0:
        this.setState({ img: "" });
        break;
      case 1:
        this.setState({ img: "" });
        break;
      case 2:
        this.setState({ img: "" });
        break;
      case 3:
        this.setState({ img: "" });
        break;
      case 4:
        this.setState({ img: "" });
        break;
      case 5:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 6:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 7:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 8:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 9:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 10:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 11:
        this.setState({ img: "" });
        break;
      case 12:
        this.setState({ img: "" });
        break;
      case 13:
        this.setState({ img: "" });
        break;
      case 14:
        this.setState({ img: "" });
        break;
      case 15:
        this.setState({ img: "" });
        break;
      case 16:
        this.setState({ img: "" });
        break;
      case 17:
        this.setState({ img: "" });
        break;
      case 18:
        this.setState({ img: "" });
        break;
      case 19:
        this.setState({ img: "moon at 8.jpg" });
        break;
      case 20:
        this.setState({ img: "moon at 8.jpg" });
        break;
      case 21:
        this.setState({ img: "" });
        break;
      case 22:
        this.setState({ img: "" });
        break;
      case 23:
        this.setState({ img: "" });
        break;
    }
  };

  componentDidMount() {
    this.getHour();
  }
  render() {
    return (
      <View>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <Text style={{ color: "white", fontSize: 30 }}>
            {" "}
            HomeScreen {this.state.time}
          </Text>
          <Image
            source={require("../assets/images/" + this.state.img)}
            style={styles.appIcon}
          />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80,
  },
});
