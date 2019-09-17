import React, { Component } from "react";
import { View } from "react-native";
import Photo from "./Photo";
import { ScrollView } from "react-native";
import NameStatus from "./NameStatus";
import Goals from "./Goals";
import Locations from "./Locations";
import Friends from "./Friends";
import Timeline from "./Timeline";
import Box from "../Home/Box";

class Profile extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "silver" }}>
        <ScrollView>
          <Photo />
          <NameStatus />
          <Goals />
          <Locations />
          <Friends />
          <Timeline />
          <Box />
        </ScrollView>
      </View>
    );
  }
}
export default Profile;
