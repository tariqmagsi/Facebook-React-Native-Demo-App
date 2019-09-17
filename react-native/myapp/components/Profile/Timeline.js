import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import TimelinePost from "./TimelinePost";

class Timeline extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginLeft: 15,
              color: "black",
              paddingTop: 5,
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            Timeline
          </Text>
          <View>
            <Text
              style={{
                backgroundColor: "#f4f5f2",
                width: 100,
                height: 40,
                paddingTop: 7,
                paddingLeft: 12,
                borderRadius: 10,
                marginRight: 10
              }}
            >
              <Text>
                <Foundation name="filter" style={{ fontSize: 25 }} />
              </Text>
              {"         "}
              {Platform.OS === "android" ? (
                <Ionicons name="md-settings" style={{ fontSize: 25 }} />
              ) : (
                <Ionicons name="ios-settings" style={{ fontSize: 25 }} />
              )}
            </Text>
          </View>
        </View>
        <TimelinePost />
      </View>
    );
  }
}
export default Timeline;
