import React, { Component } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import NotificationText from "./NotificationText";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Notification extends Component {
  state = {
    array: [
      {
        name: "Tariq Magsi",
        status: " metioned you in a comment in a ",
        who: "Group",
        img: require("../../Images/tariq.jpg"),
        color: "#bed7fa"
      },
      {
        name: "Tariq Magsi",
        status: " metioned you in a comment in a ",
        who: "Group",
        img: require("../../Images/tariq.jpg"),
        color: "white"
      },
      {
        name: "Tariq Magsi",
        status: " metioned you in a comment in a ",
        who: "Group",
        img: require("../../Images/tariq.jpg"),
        color: "#bed7fa"
      },
      {
        name: "Tariq Magsi",
        status: " metioned you in a comment in a ",
        who: "Group",
        img: require("../../Images/tariq.jpg"),
        color: "white"
      },
      {
        name: "Tariq Magsi",
        status: " metioned you in a comment in a ",
        who: "Group",
        img: require("../../Images/tariq.jpg"),
        color: "#bed7fa"
      }
    ]
  };
  render() {
    return (
      <FlatList
        data={this.state.array}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: item.color }}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("gray")}
              >
                <View
                  style={{
                    marginLeft: 5,
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingBottom: 10,
                    justifyContent: "space-between",
                    maxWidth: Math.round(Dimensions.get("window").width) - 110
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ height: 70, width: 70, borderRadius: 50 }}
                  />

                  <NotificationText
                    name={item.name}
                    status={item.status}
                    who={item.who}
                  />

                  <TouchableOpacity>
                    <Text
                      style={{
                        textAlign: "left"
                      }}
                    >
                      <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={{ fontSize: 25, color: "gray" }}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableNativeFeedback>
            </View>
          );
        }}
      />
    );
  }
}
export default Notification;
