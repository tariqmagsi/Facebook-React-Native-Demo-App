import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import {
  TouchableNativeFeedback,
  ScrollView
} from "react-native-gesture-handler";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Foundation,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import ProfileRow from "./ProfileRow";
import { getFromStorage, removeFromStorage } from "../storage/storage";
import { getIPv4Address } from "../ip/ip";

class TabRow extends Component {
  state = {
    array: [
      {
        logo: <Entypo name="users" size={30} color="#3b5998" />,
        title: "Friends"
      },
      {
        logo: <FontAwesome name="group" size={30} color="green" />,
        title: "Groups"
      },
      {
        logo: <MaterialIcons name="live-tv" size={30} color="red" />,
        title: "Videos To Watch"
      },
      {
        logo: <MaterialIcons name="event" size={30} color="brown" />,
        title: "Events"
      },
      {
        logo: <AntDesign name="clockcircle" size={30} color="purple" />,
        title: "Memories"
      },
      {
        logo: <Foundation name="save" size={30} color="blue" />,
        title: "Saved"
      },
      {
        logo: <Foundation name="page-multiple" size={30} color="orange" />,
        title: "Pages"
      },
      {
        logo: <FontAwesome name="users" size={30} color="green" />,
        title: "Nearby Friends"
      },
      {
        logo: <FontAwesome name="gamepad" size={30} color="red" />,
        title: "Gaming"
      },
      {
        logo: <Entypo name="man" size={30} color="#3b5998" />,
        title: "Jobs"
      },
      {
        logo: <MaterialIcons name="local-activity" size={30} color="purple" />,
        title: "Local"
      },
      {
        logo: <MaterialIcons name="record-voice-over" size={30} color="blue" />,
        title: "Recommendations"
      },
      {
        logo: <MaterialIcons name="local-see" size={30} color="brown" />,
        title: "See More"
      },
      {
        logo: <Entypo name="help-with-circle" size={30} color="green" />,
        title: "Help & Support"
      },
      {
        logo: <MaterialIcons name="settings" size={30} color="silver" />,
        title: "Settings & Privacy"
      },
      {
        logo: (
          <MaterialCommunityIcons name="logout" size={30} color="#3b5998" />
        ),
        title: "Logout"
      }
    ]
  };
  logoutHandler = async id => {
    if (id === "Logout") {
      const obj = await getFromStorage("LasaaniBiryani");
      if (obj && obj.token) {
        const { token } = obj;
        fetch("http://" + getIPv4Address() + "/profiles/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(json => {
            if (json.success) {
              removeFromStorage("LasaaniBiryani");

              this.props.navigation.navigate("Login");
            }
          });
      }
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <ScrollView>
          <ProfileRow />
          <FlatList
            data={this.state.array}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple("gray")}
                  onPress={() => this.logoutHandler(item.title)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "white",
                      paddingTop: 10,
                      paddingBottom: 10,
                      marginLeft: 15,
                      marginRight: 10
                    }}
                  >
                    <Text>{item.logo}</Text>
                    <View style={{ paddingLeft: 10 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black"
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default TabRow;
