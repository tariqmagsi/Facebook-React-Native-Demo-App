import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler";

class PeopleYouMayKnow extends Component {
  state = {
    array: [
      {
        img: require("../../Images/tariq.jpg"),
        name: "Tariq Magsi",
        mutual: "5 Mutual Friends"
      },
      {
        img: require("../../Images/tariq1.jpg"),
        name: "John",
        mutual: "1 Mutual Friend"
      },
      {
        img: require("../../Images/tariq2.jpg"),
        name: "Mark",
        mutual: "4 Mutual Friends"
      },
      {
        img: require("../../Images/tariq3.jpg"),
        name: "Steve",
        mutual: "2 Mutual Friends"
      },
      {
        img: require("../../Images/tariq4.jpg"),
        name: "Smith",
        mutual: "9 Mutual Friends"
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
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("gray")}
            >
              <View style={styles.box}>
                <TouchableOpacity>
                  <Image
                    source={item.img}
                    style={{
                      height: 90,
                      width: 90,
                      borderRadius: 50,
                      marginLeft: 5
                    }}
                  />
                </TouchableOpacity>
                <View style={{ marginRight: 10 }}>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingLeft: 10,
                      paddingTop: 5
                    }}
                  >
                    {item.name}
                    {"\n"}
                    <Text
                      style={{
                        color: "gray",
                        fontSize: 13,
                        paddingLeft: 13,
                        paddingTop: 5,
                        fontWeight: "normal"
                      }}
                    >
                      {item.mutual}
                    </Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 5,
                      paddingBottom: 5
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        marginLeft: 10,
                        backgroundColor: "gray",
                        borderRadius: 10
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "white",
                          backgroundColor: "#315a94",
                          paddingLeft: 23,
                          width: 120,
                          paddingTop: 10,
                          height: 45,
                          borderRadius: 10
                        }}
                      >
                        Add Friend
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        marginLeft: 5,
                        backgroundColor: "gray",
                        borderRadius: 10
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "gray",
                          backgroundColor: "#f4f5f2",
                          paddingLeft: 40,
                          width: 120,
                          paddingTop: 10,
                          height: 45,
                          borderRadius: 10
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
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
    justifyContent: "space-between"
  }
});
export default PeopleYouMayKnow;
