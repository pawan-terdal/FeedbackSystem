/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, BackHandler } from "react-native";
import { Container, Content, Button, Text, Toast } from "native-base";
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
          <Image style={styles.image} source={require("./pes_logo.png")} />
          <View>
            <Text style={styles.text}>
              Project Mela <Text style={styles.secondText}>2019</Text>{" "}
            </Text>
          </View>
          <Button
            rounded
            large
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Feedback")}
          >
            <Text>Start Feedback</Text>
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
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: Dimensions.get("window").height * 0.5
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center"
  },
  text: {
    fontSize: 45,
    alignSelf: "center",
    marginTop: 20,
    color: "#012e77",
    fontWeight: "bold"
  },
  secondText: {
    fontSize: 45,
    alignSelf: "center",
    marginTop: 20,
    color: "#db1313",
    fontWeight: "bold"
  }
});
