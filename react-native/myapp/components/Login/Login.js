import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Navbar from "../Navbar";
import NavbarMenu from "../NavbarMenu";
import LoginPage from "./LoginPage";
import Signup from "../Signup/Signup";

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: { header: null }
    },
    Pages: {
      screen: NavbarMenu,
      navigationOptions: { header: <Navbar /> }
    },
    Signup: {
      screen: Signup,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "Login"
  }
);
export default Login = createAppContainer(StackNavigator);
