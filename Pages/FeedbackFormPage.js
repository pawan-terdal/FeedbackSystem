/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage, Dimensions } from "react-native";
import firebase from "firebase";
import "firebase/firestore";

import dbConn from "../Config/Firestore";
import {
  Container,
  Content,
  Button,
  Text,
  Grid,
  Col,
  Row,
  Toast,
  Footer,
  FooterTab
} from "native-base";
import { AirbnbRating } from "react-native-ratings";
import LoadingPage from "../Components/LoadingPage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
type Props = {};
export default class FeedbackFormPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      technology: 1,
      explanation: 1,
      projectIdea: 1,
      demonstration: 1,
      done: true
    };
  }
  static navigationOptions = {
    header: null
  };
  async componentDidMount() {
    try {
      let email = await AsyncStorage.getItem("email");
      let branch = await AsyncStorage.getItem("branch");
      console.log("--------", email);
      this.setState({ email: email, branch: branch });
    } catch (error) {
      alert(error);
    }
    console.log(dbConn);
  }

  captureTechnology = rating => {
    this.setState({ technology: rating });
  };
  captureProjectIdea = rating => {
    this.setState({ projectIdea: rating });
  };
  captureExplanation = rating => {
    this.setState({ explanation: rating });
  };
  captureDemonstration = rating => {
    this.setState({ demonstration: rating });
  };
  submitFeedback = async () => {
    console.log(this.state);
    this.setState({ done: false });

    let docRef = dbConn.collection(this.state.branch).doc(this.state.email);
    console.log("what--------------------------------------------", docRef);

    await docRef.update({
      projectIdea: firebase.firestore.FieldValue.increment(
        parseInt(this.state.projectIdea, 10)
      ),
      demonstration: firebase.firestore.FieldValue.increment(
        parseInt(this.state.demonstration, 10)
      ),
      technology: firebase.firestore.FieldValue.increment(
        parseInt(this.state.technology, 10)
      ),
      explanation: firebase.firestore.FieldValue.increment(
        parseInt(this.state.explanation, 10)
      ),
      visits: firebase.firestore.FieldValue.increment(1)
    });
    this.setState({ done: true });

    this.props.navigation.navigate("Thankyou");
  };
  render() {
    if (!this.state.done) {
      return <LoadingPage message="Submitting your feedback......" />;
    } else {
      return (
        <Container style={{ backgroundColor: "#e8e6da" }}>
          <Content>
            <Grid>
              <Row style={styles.row}>
                <Col>
                  <Text style={styles.text}>Project Idea</Text>
                </Col>
                <Col>
                  <View style={styles.star}>
                    <AirbnbRating
                      count={3}
                      reviews={["Average", "Good", "Excellent"]}
                      defaultRating={1}
                      onFinishRating={this.captureProjectIdea}
                    />
                  </View>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col>
                  <Text style={styles.text}>Demonstration</Text>
                </Col>
                <Col>
                  <View style={styles.star}>
                    <AirbnbRating
                      count={3}
                      reviews={["Average", "Good", "Excellent"]}
                      defaultRating={1}
                      onFinishRating={this.captureDemonstration}
                    />
                  </View>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col>
                  <Text style={styles.text}>Explanation</Text>
                </Col>
                <Col>
                  <View style={styles.star}>
                    <AirbnbRating
                      count={3}
                      reviews={["Not clear", "Clear", "Very Clear"]}
                      defaultRating={1}
                      onFinishRating={this.captureExplanation}
                    />
                  </View>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col>
                  <Text style={styles.text}>Technology</Text>
                </Col>
                <Col>
                  <View style={styles.star}>
                    <AirbnbRating
                      count={3}
                      reviews={["Old", "Moderate", "New"]}
                      defaultRating={1}
                      onFinishRating={this.captureTechnology}
                    />
                  </View>
                </Col>
              </Row>
            </Grid>
          </Content>
          <Footer>
            <Button transparent onPress={this.submitFeedback}>
              <Text style = {{color: 'white'}}>finish feedback</Text>
            </Button>
          </Footer>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  row: {
    marginTop: wp("5%"),
    width: wp("98%")
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 60,
    marginLeft: 10,
    color: "#211b1a"
  },
  star: {
    width: 190,
    height: 100
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: hp("90%")
  }
});
