/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Dimensions, BackHandler } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Toast
} from "native-base";
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
  render() {
    return (
      <Container style={{ backgroundColor: "#e8e6da" }}>
        <Content>
          <View>
            <Icon name="ios-checkmark-circle-outline" style={styles.check} />
            <Text style = {styles.text}>Your feedback has been recorded</Text>
            <Text style = {styles.text}>Thank you !</Text>
            <Button
              rounded
              large
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text>Finish</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  check: {
    color: "green",
    fontSize: 150,
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.1,
    marginBottom: 20
  },
  button: {
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.4
  },
  text: {
    fontSize: 25,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
