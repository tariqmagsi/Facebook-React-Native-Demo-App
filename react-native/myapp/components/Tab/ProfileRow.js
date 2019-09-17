import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { TouchableNativeFeedback } from "react-native-gesture-handler";

class ProfileRow extends Component {
  render() {
    return (
      <TouchableNativeFeedback>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#f4f5f2",
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <Image
            source={require("../../Images/tariq.jpg")}
            style={{ height: 40, width: 40, borderRadius: 50 }}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
              Tariq Magsi
            </Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              View your profile
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
export default ProfileRow;
