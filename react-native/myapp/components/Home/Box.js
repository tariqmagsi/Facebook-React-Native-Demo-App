import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign
} from "@expo/vector-icons";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight
} from "react-native-responsive-dimensions";

class Box extends Component {
  state = {
    array: [
      {
        proImg: require("../../Images/tariq.jpg"),
        postImg: require("../../Images/tariq.jpg"),
        name: "Tariq Magsi",
        time: "1 min",
        post: "This is post portion You can see a picture which I have posted"
      },
      {
        proImg: require("../../Images/tariq.jpg"),
        postImg: require("../../Images/tariq1.jpg"),
        name: "Tariq Magsi",
        time: "1 min",
        post: "This is post portion You can see a picture which I have posted"
      },
      {
        proImg: require("../../Images/tariq.jpg"),
        postImg: require("../../Images/tariq2.jpg"),
        name: "Tariq Magsi",
        time: "1 min",
        post: "This is post portion You can see a picture which I have posted"
      },
      {
        proImg: require("../../Images/tariq.jpg"),
        postImg: require("../../Images/tariq3.jpg"),
        name: "Tariq Magsi",
        time: "1 min",
        post: "This is post portion You can see a picture which I have posted"
      },
      {
        proImg: require("../../Images/tariq.jpg"),
        postImg: require("../../Images/tariq4.jpg"),
        name: "Tariq Magsi",
        time: "1 min",
        post: "This is post portion You can see a picture which I have posted"
      }
    ],
    likeCount: 1,
    likeFlag: false,
    likeColor: "black"
  };
  likeHandler = () => {
    this.setState({
      likeFlag: !this.state.likeFlag,
      likeColor: !this.state.likeFlag ? "#3b5998" : "black"
    });
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
                flexDirection: "column",
                marginTop: 20,
                backgroundColor: "gray"
              }}
            >
              <View style={styles.box}>
                <TouchableOpacity>
                  <View style={styles.row1}>
                    <Image
                      source={item.proImg}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        marginLeft: 5
                      }}
                    />
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
                        {item.time}
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{ marginRight: 5 }}>
                  <TouchableOpacity>
                    <Text>
                      <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={{ fontSize: 30, color: "gray" }}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.box}>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple("gray")}
                >
                  <Text style={{ marginLeft: 5, marginRight: 5 }}>
                    {item.post}
                  </Text>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.box}>
                <Image
                  source={item.postImg}
                  style={{
                    height: responsiveHeight(50),
                    width: responsiveWidth(100)
                  }}
                />
              </View>

              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("gray")}
              >
                <View style={styles.box}>
                  {this.state.likeFlag ? (
                    <Text style={{ marginLeft: 5, fontSize: 11 }}>
                      <AntDesign
                        name="like1"
                        style={{
                          fontSize: 13,
                          color: "#3b5998"
                        }}
                      />
                      {"  "}
                      {this.state.likeCount}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                </View>
              </TouchableNativeFeedback>

              <View style={styles.box}>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple("gray")}
                  onPress={this.likeHandler}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      backgroundColor: "#f4f5f2",
                      height: 50,
                      width: responsiveWidth(33.34),
                      paddingLeft: 25,
                      paddingTop: 13,
                      fontWeight: "bold",
                      color: this.state.likeColor
                    }}
                  >
                    <AntDesign name="like2" size={15} />
                    {"  "}Like
                  </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple("gray")}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      backgroundColor: "#f4f5f2",
                      height: 50,
                      width: responsiveWidth(33.33),
                      paddingLeft: 10,
                      paddingTop: 13,
                      fontWeight: "bold"
                    }}
                  >
                    {" "}
                    <EvilIcons
                      name="comment"
                      style={{
                        fontSize: 15
                      }}
                    />
                    {"  "}Comment
                  </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple("gray")}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      backgroundColor: "#f4f5f2",
                      height: 50,
                      width: responsiveWidth(33.33),
                      paddingLeft: 10,
                      paddingTop: 13,
                      fontWeight: "bold"
                    }}
                  >
                    {"     "}
                    <MaterialCommunityIcons
                      name="share-outline"
                      style={{
                        fontSize: 15
                      }}
                    />
                    {"  "}Share
                    {"\n"}
                  </Text>
                </TouchableNativeFeedback>
              </View>
            </View>
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
    width: responsiveWidth(100),
    justifyContent: "space-between"
  },
  newsFeedBar: {
    height: "auto",
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 30,
    elevation: 4,
    paddingTop: 10,

    top: 0
  },
  row1: {
    height: "auto",
    backgroundColor: "white",
    flexDirection: "row"
  }
});
export default Box;
