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
  Toast,
  Footer
} from "native-base";
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
  render() {
    return (
      <Container style={{ backgroundColor: "#e8e6da" }}>
        <Content>
          <View style={styles.view}>
            <Icon name="ios-checkmark-circle-outline" style={styles.check} />
            <Text style={styles.text}>Feedback recorded</Text>
            <Text style={styles.text}>Thank you !</Text>
          </View>
        </Content>
        <Footer>
          <Button
            transparent
            
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style = {{color: 'white'}}>Finish</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  check: {
    color: "green",
    fontSize: 150,
    alignSelf: "center"
  },
  button: {
    alignSelf: "center"
  },
  text: {
    fontSize: 25,
    marginTop: wp("5%"),
    justifyContent: "center",
    alignSelf: "center"
  },
  view: {
    width: wp("100%"),
    height: hp("80%"),
    marginTop: hp("5%")
  }
});
