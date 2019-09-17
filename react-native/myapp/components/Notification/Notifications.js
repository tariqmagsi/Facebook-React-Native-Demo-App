import React, { Component } from "react";
import { View, Text } from "react-native";
import Notification from "./Notification";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

class Notifications extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          paddingTop: 10
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
            marginLeft: 10
          }}
        >
          Notifications
        </Text>
        <View>
          <Notification />
        </View>
      </View>
    );
  }
}
export default Notifications;
