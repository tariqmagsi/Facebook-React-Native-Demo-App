import React, { Component } from "react";
import { View } from "react-native";
import FriendRequest from "./FriendRequest";

import { ScrollView } from "react-native";

class FriendRequests extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <FriendRequest />
        </ScrollView>
      </View>
    );
  }
}
export default FriendRequests;
