import React, { Component } from "react";
import {
  Text,
  View,
  CameraRoll,
  ImageEditor,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class Post extends Component {
  state = { imgSrc: null };
  selectImage = () => {
    Permissions.askAsync(Permissions.CAMERA_ROLL).then(({ status }) => {
      if (status === "granted") {
        ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [2, 2]
        }).then(imageData => {
          if (imageData.cancelled) {
            return;
          }

          ImageEditor.cropImage(
            imageData.uri,
            {
              offset: { x: 0, y: 0 },
              size: { width: imageData.width, height: imageData.height },
              displaySize: { width: 50, height: 50 },
              resizeMode: "contain"
            },
            uri => this.setState({ imgSrc: uri }),
            e => console.log("error occured", e)
          );
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.box}>
        <TouchableOpacity>
          <Image
            source={require("../../Images/tariq.jpg")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              marginLeft: 5
            }}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="What's on your mind?"
          style={{
            color: "black",
            borderColor: "gray",
            borderWidth: 1,
            width: 220,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            paddingTop: 5,
            paddingLeft: 10
          }}
        />

        <TouchableOpacity onPress={this.selectImage}>
          <Text style={{ marginRight: 5 }}>
            {" "}
            <Ionicons
              name={Platform.OS === "android" ? "md-photos" : "ios-photos"}
              style={{ fontSize: 40, color: "gray" }}
            />
            {"\n"}Photos
          </Text>
        </TouchableOpacity>
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
    paddingBottom: 10,
    top: 0,
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
    flexDirection: "column"
  }
});
export default Post;
