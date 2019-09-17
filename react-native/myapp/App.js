import React from "react";
import { View, StatusBar, Text, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import Login from "./components/Login/Login";

function DummyStatusBar(props) {
  return (
    <View
      style={{
        backgroundColor: "#3b5998",
        height: Constants.statusBarHeight
      }}
    >
      <StatusBar translucent={false} {...props} />
    </View>
  );
}
export default class App extends React.Component {
  state = { bgColor: StatusBar.backgroundColor };
  handleColor = color => {
    this.setState({ bgColor: color });
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, backgroundColor: "#3b5998" }}
        enabled
      >
        <View style={{ flex: 1, backgroundColor: "#3b5998" }}>
          <DummyStatusBar
            backgroundColor={this.state.bgColor}
            barStyle="light-content"
          />

          <Login />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
