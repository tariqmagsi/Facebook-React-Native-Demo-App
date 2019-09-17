import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class NameStatus extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "white",
          marginTop: -20
        }}
      >
        <View>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
          >
            Tariq Magsi
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "black",
              marginTop: 5,
              marginBottom: 5,
              textAlign: "center"
            }}
          >
            I am Tariq Magsi and I am Computer Scientist
          </Text>
        </View>
      </View>
    );
  }
}

export default NameStatus;
