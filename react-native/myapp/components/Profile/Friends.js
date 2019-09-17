import React, { Component } from "react";
import { View, Text } from "react-native";

import {
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native-gesture-handler";
import FriendsImage from "./FriendsImage";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";

class Friends extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          paddingTop: 10,
          paddingBottom: 10,
          borderTopColor: "gray",
          borderTopWidth: 1
        }}
      >
        <View>
          <Text
            style={{
              marginLeft: 15,
              color: "black",
              paddingTop: 5,
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            Friends
          </Text>
          <Text style={{ color: "gray", fontSize: 10, marginLeft: 15 }}>
            100 Friends
          </Text>
        </View>
        <View
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <FriendsImage
            img={require("../../Images/tariq.jpg")}
            name="Tariq Magsi"
          />
          <FriendsImage img={require("../../Images/tariq1.jpg")} name="Smith" />
          <FriendsImage img={require("../../Images/tariq2.jpg")} name="Steve" />
        </View>
        <View
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <FriendsImage
            img={require("../../Images/tariq3.jpg")}
            name="Andrew"
          />
          <FriendsImage
            img={require("../../Images/tariq4.jpg")}
            name="Symond"
          />
          <FriendsImage img={require("../../Images/tariq.jpg")} name="Tayyab" />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              backgroundColor: "#f4f5f2",
              paddingLeft: 15,
              width: responsiveWidth(95),
              paddingTop: 10,
              marginLeft: 10,
              height: 40,
              borderRadius: 10,
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            See All Friends
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Friends;
