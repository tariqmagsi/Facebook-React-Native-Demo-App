import React, { Component } from "react";
import { View, Text } from "react-native";

class NotificationText extends Component {
  render() {
    return (
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 15,
          marginLeft: 10
        }}
      >
        {this.props.name}
        <Text
          style={{
            color: "black",
            fontSize: 15,
            fontWeight: "normal"
          }}
        >
          {this.props.status}
          <Text style={{ fontWeight: "bold", color: "black" }}>
            {this.props.who}
          </Text>
        </Text>
      </Text>
    );
  }
}
export default NotificationText;
