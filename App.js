/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedbackFormPage from "./Pages/FeedbakFormPage";
import StartFeedbackPage from "./Pages/StartFeedbackPage";
import ThankyouPage from "./Pages/ThankyouPage";
import FirstTimePage from "./Pages/FirstTimePage";
import AsyncStorage from "@react-native-community/async-storage";
import { Root } from "native-base";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { firstTime: false };
  }
  async componentDidMount() {
    const firstTime = await AsyncStorage.getItem("firstTime");
    if (firstTime == null) {
      // not set -> first time
      this.setState({ firstTime: true });
    }
  }
  render() {
    if (this.state.firstTime) {
      return (
        <Root>
          <FirstTimeFlow />
        </Root>
      );
    } else {
      return (
        <Root>
          <AppContainer />
        </Root>
      );
    }
  }
}
const RootStack = createStackNavigator({
  Home: StartFeedbackPage,
  Feedback: FeedbackFormPage,
  Thankyou: ThankyouPage
});
const SpecialFlow = createStackNavigator({
  FirstTime: FirstTimePage,
  Home: StartFeedbackPage,
  Feedback: FeedbackFormPage,
  Thankyou: ThankyouPage
});
const AppContainer = createAppContainer(RootStack);
const FirstTimeFlow = createAppContainer(SpecialFlow);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
