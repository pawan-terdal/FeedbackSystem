/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, BackHandler } from "react-native";
import { Container, Content, Button, Text, Toast, Footer } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
type Props = {};
export default class StartFeedbackPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };
  async componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton() {
    Toast.show({
      text: "Not allowed to go back !",
      buttonText: "Okay",
      type: "danger",
      duration: 3000
    });
    return true;
  }
  shouldNavigate = () => {
    var currentDateTime = new Date();
    var melaDateTime = new Date(2019, 3, 24, 0, 15, 0, 0);
    var hoursLeft = Math.trunc(Math.abs(melaDateTime - currentDateTime) / 36e5);
    var minsLeft = Math.round(
      (Math.abs(melaDateTime - currentDateTime) % 36e5) / 60000
    );
    if (melaDateTime.getTime() - currentDateTime.getTime() < 0) {
      this.props.navigation.navigate("Feedback");
    } else {
      Toast.show({
        text: hoursLeft + " hrs "+ minsLeft+" mins left for Project Mela to start",
        buttonText: "Okay",
        type: "danger",
        duration: 4000
      });
    }
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#e8e6da" }}>
        <Content>
          <View style={styles.view}>
            <Image style={styles.image} source={require("./pes_logo.png")} />

            <Text style={styles.text}>
              Project Mela <Text style={styles.secondText}>2019</Text>{" "}
            </Text>
          </View>
        </Content>
        <Footer>
          <Button
            transparent
            style={styles.button}
            onPress={this.shouldNavigate}
          >
            <Text style={{ color: "white" }}>Start Feedback</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: wp("100%"),
    height: hp("80%"),
    marginTop: hp("5%")
  },
  button: {
    alignSelf: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center"
  },
  text: {
    fontSize: 35,
    alignSelf: "center",
    marginTop: 20,
    color: "#012e77",
    fontWeight: "bold"
  },
  secondText: {
    fontSize: 35,
    alignSelf: "center",
    marginTop: 20,
    color: "#db1313",
    fontWeight: "bold"
  }
});
