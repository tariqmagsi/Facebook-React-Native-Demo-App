import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons
} from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Home from "./Home/Home";
import FriendRequestss from "./FriendRequests/FriendRequests";
import Profile from "./Profile/Profile";
import NotificationMain from "./Notification/NotificationMain";
import TabRow from "./Tab/TabRow";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="home-circle"
            size={25}
            color={tintColor}
          />
        )
      }
    },
    FriendReq: {
      screen: FriendRequestss,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Feather name="users" size={24} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle" size={24} color={tintColor} />
        )
      }
    },
    Notification: {
      screen: NotificationMain,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="notifications" size={25} color={tintColor} />
        )
      }
    },
    Tabs: {
      screen: TabRow,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="table-of-contents"
            size={25}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarPosition: "top",
    tabBarOptions: {
      showIcon: true,
      pressColor: "gray",
      showLabel: false,
      activeTintColor: "#3b5998",
      inactiveTintColor: "gray",
      tabStyle: {
        width: 70
      },
      style: {
        backgroundColor: "white",
        elevation: 4,
        paddingTop: 0,
        height: 55,
        top: 0
      },
      indicatorStyle: {
        backgroundColor: "#3b5998",
        marginBottom: 0.5,
        width: 65,
        marginLeft: 5
      }
    },
    order: ["Home", "FriendReq", "Profile", "Notification", "Tabs"]
  }
);

export default NavbarMenu = createAppContainer(TabNavigator);
