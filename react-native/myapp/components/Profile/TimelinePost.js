import React, { Component } from "react";
import { View, Text, Image, Platform } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { responsiveWidth } from "react-native-responsive-dimensions";

class TimelinePost extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../Images/tariq.jpg")}
            style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 15 }}
          />
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("gray")}
          >
            <Text
              style={{
                marginLeft: 15,
                color: "black",
                paddingTop: 5,
                fontSize: 15
              }}
            >
              What's on your mind?
            </Text>
          </TouchableNativeFeedback>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("gray")}
          >
            <Text
              style={{
                fontSize: 15,
                backgroundColor: "#f4f5f2",
                height: 50,
                width: responsiveWidth(33.33),
                paddingLeft: 25,
                paddingTop: 13,
                fontWeight: "bold"
              }}
            >
              <Entypo name="video-camera" color="red" size={15} />
              {"  "}
              Live
            </Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("gray")}
          >
            <Text
              style={{
                fontSize: 15,
                backgroundColor: "#f4f5f2",
                height: 50,
                width: responsiveWidth(33.34),
                paddingLeft: 25,
                paddingTop: 13,
                fontWeight: "bold"
              }}
            >
              <Ionicons
                name={Platform.OS === "android" ? "md-photos" : "ios-photos"}
                color="green"
                size={15}
              />
              {"  "}
              Photo
            </Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("gray")}
          >
            <Text
              style={{
                fontSize: 15,
                backgroundColor: "#f4f5f2",
                height: 50,
                width: responsiveWidth(33.33),
                paddingLeft: 18,
                paddingTop: 13,
                fontWeight: "bold"
              }}
            >
              <Entypo name="flag" color="purple" size={15} />
              {"  "}
              Life Event
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
export default TimelinePost;
