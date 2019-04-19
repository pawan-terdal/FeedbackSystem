/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Dimensions } from "react-native";
import { Container, Header, Title, Content, Spinner, Text } from "native-base";
type Props = {};
export default class LoadingPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#e8e6da" }}>
        <Content>
          <Spinner />
          <View>
            <Text style={styles.text}>{this.props.message}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "#211b1a",
    alignSelf: "center"
  }
});
