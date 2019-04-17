/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form
} from "native-base";
type Props = {};
export default class FirstTimePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "enter email"
  };
  handleButtonPress = async () => {
    await AsyncStorage.setItem("firstTime", "False");
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <Container>
        <Content>
          <Text>Thank you for your feedback</Text>
          <Button onPress={this.handleButtonPress}>
            <Text>Go back Home</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

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
