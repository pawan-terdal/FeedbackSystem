/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, AsyncStorage } from "react-native";
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
  Form,
  Grid,
  Col,
  Row
} from "native-base";
import { Rating, AirbnbRating } from "react-native-ratings";
type Props = {};
export default class FeedbackFormPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Fill this"
  };

  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col>
                <Text style={styles.text}>1. Project Idea</Text>
              </Col>
              <Col>
                <View style={styles.star}>
                  <AirbnbRating
                    count={3}
                    reviews={["Average", "Good", "Excellent"]}
                    defaultRating={1}
                  />
                </View>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text style={styles.text}>2. Demonstration</Text>
              </Col>
              <Col>
                <View style={styles.star}>
                  <AirbnbRating
                    count={3}
                    reviews={["Average", "Good", "Excellent"]}
                    defaultRating={1}
                  />
                </View>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text style={styles.text}>3. Explanation</Text>
              </Col>
              <Col>
                <View style={styles.star}>
                  <AirbnbRating
                    count={3}
                    reviews={["Not clear", "Clear", "Very Clear"]}
                    defaultRating={1}
                  />
                </View>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text style={styles.text}>4. Technology</Text>
              </Col>
              <Col>
                <View style={styles.star}>
                  <AirbnbRating
                    count={3}
                    reviews={["Old", "Moderate", "New"]}
                    defaultRating={1}
                  />
                </View>
              </Col>
            </Row>
          </Grid>
          <Button rounded style = {styles.button} onPress={() => this.props.navigation.navigate("Thankyou")}>
            <Text>finish feedback</Text>
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
  button:{
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
});
