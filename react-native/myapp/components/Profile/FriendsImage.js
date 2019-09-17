import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class FriendsImage extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <View>
          <TouchableOpacity>
            <Image
              source={this.props.img}
              style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                marginLeft: 10,
                marginTop: 5,
                marginRight: 10
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 17,
                marginTop: 5,
                marginRight: 17
              }}
            >
              {this.props.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default FriendsImage;
