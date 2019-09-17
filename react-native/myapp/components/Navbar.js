import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  CameraRoll,
  ImageEditor
} from "react-native";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class Navbar extends Component {
  state = { imgSrc: null };
  whenPressHandler = () => {
    Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL).then(
      ({ status }) => {
        if (status === "granted") {
          const options = {
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
          };
          ImagePicker.launchCameraAsync(options)
            .then(imageData => {
              if (imageData.cancelled) {
                return;
              }
              CameraRoll.saveToCameraRoll(imageData.uri)
                .then(val => console.log(val, "Image saved!"))
                .catch(e => console.log(e, "error saving image."));
            })
            .catch(e => console.log(e));
        }
      }
    );
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.navbar}>
          <TouchableOpacity onPress={this.whenPressHandler}>
            <Text style={{ color: "white", fontSize: 20, marginLeft: 5 }}>
              {" "}
              <Entypo name="camera" style={{ fontSize: 30 }} />
            </Text>
          </TouchableOpacity>

          <Text style={{ color: "white", fontSize: 20 }}>
            {"   "} <Feather name="search" style={{ fontSize: 30 }} />
          </Text>

          <TextInput
            type="text"
            name="searchbar"
            placeholder=" Search"
            style={{
              height: 35,
              borderColor: "gray",
              borderBottomWidth: 1,
              width: 200,
              color: "white"
            }}
          />
          <TouchableOpacity>
            <Text style={{ color: "white", marginRight: 5 }}>
              <MaterialCommunityIcons
                name="facebook-messenger"
                style={{ fontSize: 30 }}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    height: 55,
    backgroundColor: "#3b5998",
    flexDirection: "row",
    paddingTop: 10,
    top: 0,
    justifyContent: "space-between"
  }
});
export default Navbar;
