import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

class Requests extends Component {
  state = {
    array: [
      {
        img: require("../../Images/tariq4.jpg"),
        name: "Smith",
        mutual: "5 Mutual Friends"
      },
      {
        img: require("../../Images/tariq3.jpg"),
        name: "Steve",
        mutual: "1 Mutual Friend"
      },
      {
        img: require("../../Images/tariq2.jpg"),
        name: "John",
        mutual: "4 Mutual Friends"
      },
      {
        img: require("../../Images/tariq.jpg"),
        name: "Mark",
        mutual: "2 Mutual Friends"
      },
      {
        img: require("../../Images/tariq1.jpg"),
        name: "Tariq",
        mutual: "9 Mutual Friends"
      }
    ]
  };
  render() {
    return (
      <View>
        <View style={styles.box}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 22,
              marginLeft: 10
            }}
          >
            Friend Requests{" "}
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {this.state.array.length}
            </Text>
          </Text>
        </View>
        <FlatList
          data={this.state.array}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("gray")}
              >
                <View
                  style={{
                    flexDirection: "column",
                    backgroundColor: "gray"
                  }}
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
                              paddingLeft: 30,
                              width: 120,
                              paddingTop: 10,
                              height: 45,
                              borderRadius: 10
                            }}
                          >
                            Confirm
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
                </View>
              </TouchableNativeFeedback>
            );
          }}
        />
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
    justifyContent: "space-between"
  }
});
export default Requests;
