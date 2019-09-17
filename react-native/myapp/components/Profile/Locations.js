import React, { Component } from "react";
import { View, Text } from "react-native";

import {
  TouchableNativeFeedback,
  FlatList
} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

class Locations extends Component {
  state = {
    array: [
      {
        icon: (
          <FontAwesome
            name="graduation-cap"
            style={{ color: "gray", marginLeft: 5, fontSize: 15 }}
          />
        ),
        nameFirst: "   Studies at ",
        nameLast: "DHA Suffa University (Official)"
      },
      {
        icon: (
          <FontAwesome
            name="graduation-cap"
            style={{ color: "gray", marginLeft: 5, fontSize: 15 }}
          />
        ),
        nameFirst: "   Studies at ",
        nameLast: "DHA Suffa University (Official)"
      },
      {
        icon: (
          <FontAwesome
            name="graduation-cap"
            style={{ color: "gray", marginLeft: 5, fontSize: 15 }}
          />
        ),
        nameFirst: "   Studies at ",
        nameLast: "DHA Suffa University (Official)"
      },
      {
        icon: (
          <FontAwesome
            name="graduation-cap"
            style={{ color: "gray", marginLeft: 5, fontSize: 15 }}
          />
        ),
        nameFirst: "   Studies at ",
        nameLast: "DHA Suffa University (Official)"
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
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                paddingTop: 10
              }}
            >
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("gray")}
              >
                <View style={{ paddingBottom: 10 }}>
                  <Text
                    style={{
                      marginLeft: 15,
                      color: "black",
                      paddingTop: 5,
                      fontSize: 20,
                      marginRight: 15
                    }}
                  >
                    {item.icon}
                    {item.nameFirst}
                    <Text style={{ fontWeight: "bold" }}>{item.nameLast}</Text>
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          );
        }}
      />
    );
  }
}
export default Locations;
