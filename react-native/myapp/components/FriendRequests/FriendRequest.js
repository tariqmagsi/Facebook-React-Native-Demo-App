import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Requests from "./Requests";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

class FriendRequest extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white"
        }}
      >
        <View style={{ marginBottom: 15 }}>
          <Requests />
        </View>
        <View style={styles.box1}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>
            People You May Know
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <PeopleYouMayKnow />
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
export default FriendRequest;
