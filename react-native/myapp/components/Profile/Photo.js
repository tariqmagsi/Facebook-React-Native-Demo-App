import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";

class Photo extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "white"
        }}
      >
        <View style={{ paddingBottom: 30 }}>
          <Image
            source={require("../../Images/tariq1.jpg")}
            style={{
              height: responsiveHeight(50),
              width: responsiveWidth(95),
              marginLeft: 10,
              marginRight: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: 10
            }}
          />

          <Entypo
            name="camera"
            style={{
              fontSize: 20,
              color: "black",
              marginLeft: 300,
              marginTop: -40,
              backgroundColor: "#f4f5f2",
              width: 40,
              height: 30,
              paddingLeft: 10,
              borderRadius: 10,
              paddingTop: 5
            }}
          />

          <Image
            source={require("../../Images/tariq.jpg")}
            style={{
              height: responsiveHeight(32),
              width: responsiveWidth(55.5),
              alignSelf: "center",
              borderRadius: 100,
              marginTop: -120
            }}
          />
          <TouchableOpacity>
            <Entypo
              name="camera"
              style={{
                fontSize: 20,
                color: "black",
                marginLeft: 230,
                marginTop: -40,
                backgroundColor: "#f4f5f2",
                width: 30,
                height: 30,
                paddingLeft: 5,
                borderRadius: 15,
                paddingTop: 5
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    height: "auto",
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 10,
    top: 0,
    marginLeft: 10,
    marginRight: 10
  },
  box1: {
    height: "auto",
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 10,
    top: 0,
    borderTopWidth: 1,
    borderTopColor: "gray",
    marginLeft: 10,
    marginRight: 10
  }
});
export default Photo;
