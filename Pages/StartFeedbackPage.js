/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
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
import GenerateForm from "react-native-form-builder";
type Props = {};
export default class StartFeedbackPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Home",
    headerLeft: null
  };
  login = () => {
    const formValues = this.formGenerator.getValues();
    var emailId = formValues.emailId;
    console.log("FORM VALUES", emailId);
    this.validateEmail(emailId);
  };
  validateEmail = (emailId) => {
    console.log(emailId);
    
  }
  render() {
    return (
      <Container>
        <Content>
          <Button
            rounded
            large
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Feedback")}
          >
            <Text>Start Feedback</Text>
          </Button>
          <View>
            <GenerateForm
              ref={c => {
                this.formGenerator = c;
              }}
              fields={fields}
            />
          </View>
          <View style={styles.submitButton}>
            <Button rounded onPress={this.login}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
const fields = [
  {
    type: "text",
    name: "emailId",
    required: true,
    icon: "ios-person",
    label: "email id"
  }
];

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
    marginBottom: 100
  }
});
