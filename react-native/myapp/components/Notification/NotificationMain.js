import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import Notifications from "./Notifications";

class NotificationMain extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "silver" }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <Notifications />
        </ScrollView>
      </View>
    );
  }
}
export default NotificationMain;
