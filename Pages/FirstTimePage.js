/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Container, Content, Button, Text, Toast, Footer } from "native-base";
import dbConn from "../Config/Firestore";
import GenerateForm from "react-native-form-builder";
import LoadingPage from "../Components/LoadingPage";
type Props = {};
export default class FirstTimePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { done: true };
  }
  static navigationOptions = {
    header: null
  };
  storeEmailLocally = async (emailId, branches) => {
    try {
      this.setState({ done: false });
      await AsyncStorage.setItem("email", emailId);
      await AsyncStorage.setItem("branch", branches);
      console.log("Branch is - ");

      let email = await AsyncStorage.getItem("email");
      let branch = await AsyncStorage.getItem("branch");
      console.log("Branch is ------------------------------- ", branch);

      if (email) {
        await dbConn
          .collection(branch)
          .doc(email)
          .set({
            projectIdea: 0,
            demonstration: 0,
            explanation: 0,
            technology: 0,
            visits: 0
          });
        await AsyncStorage.setItem("firstTime", "false");
        this.setState({ done: true });
        Toast.show({
          text: "Email registered successfully",
          buttonText: "Okay",
          type: "success",
          duration: 3000
        });
        this.props.navigation.navigate("Home");
      } else {
        alert("Something went wrong !");
      }
      console.log("from local storage--", email);
    } catch (error) {
      Toast.show({
        text: "Some problem occurred. Please try again",
        buttonText: "Okay",
        type: "warning",
        duration: 3000
      });
    }
  };

  login = () => {
    const formValues = this.formGenerator.getValues();
    var emailId = formValues.emailId;
    var branch = formValues.branch;
    console.log("FORM VALUES", emailId);
    if (this.validateEmail(emailId)) {
      this.storeEmailLocally(emailId, branch);
    }
  };
  validateEmail = emailId => {
    console.log(emailId);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailId) === false) {
      Toast.show({
        text: "Please enter a valid email address",
        buttonText: "Okay",
        type: "danger",
        duration: 3000
      });
      return false;
    } else {
      return true;
    }
  };
  render() {
    if (!this.state.done) {
      return <LoadingPage message="Registering your email id" />;
    } else {
      return (
        <Container style={{ backgroundColor: "#e8e6da" }}>
          <Content>
            <View style={styles.form}>
              <GenerateForm
                ref={c => {
                  this.formGenerator = c;
                }}
                fields={fields}
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: 30,
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  textDecorationLine: "underline"
                }}
              >
                Important
              </Text>
              <Text style={styles.text}>
                1) Please be extra careful while entering the email id. Summary
                of the feedback will be sent to this mail id.
              </Text>
              <Text style={styles.text}>
                2) You will{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>NOT</Text> be
                allowed to change the email id once registered.
              </Text>
              <Text style={styles.text}>
                3) If the email entered is wrong, the feedback summary will{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>NOT</Text>{" "}
                reach you.
              </Text>
              <Text style={styles.text}>
                4) Make sure this device has access to internet connection
                during the Project Mela.
              </Text>
              <Text style={styles.text}>
                5) In the off-chance that something goes wrong, please uninstall and re-install the app.
              </Text>
              <Text style={styles.text}>
                6) The summary of your feedback will be sent within 48 hrs after the Project Mela. 
              </Text>
            </View>
          </Content>
          <Footer>
            <Button transparent onPress={this.login} style={styles.button}>
              <Text style = {{color: 'white'}}>Register email</Text>
            </Button>
          </Footer>
        </Container>
      );
    }
  }
}
const fields = [
  {
    type: "text",
    name: "emailId",
    required: true,
    icon: "ios-person",
    label: "email id"
  },
  {
    type: "picker",
    name: "branch",
    mode: "dialog",
    label: "SELECT BRANCH",
    icon: "ios-person",
    defaultValue: "Mechanical",
    options: [
      "Computer Science",
      "Information Science",
      "Electronics and Communication",
      "Mechanical"
    ]
  }
];
const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    justifyContent: "center"
  },
  form: {
    marginTop: 20
  },
  text: {
    margin: 10,
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 22
  }
});
