import React, { Component } from "react";
import { View, BackHandler } from "react-native";
import Box from "./Box";
import Post from "./post";
import { ScrollView } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "silver" }}>
        <ScrollView>
          <Post />
          <Box />
        </ScrollView>
      </View>
    );
  }
}
export default Home;
