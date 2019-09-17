import React, { Component } from "react";
import { View, Text, TextInput, StatusBar, BackHandler } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PasswordInputText from "react-native-hide-show-password-input";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Loading from "./Loading";
import { getFromStorage, setInStorage } from "../storage/storage";
import Constants from "expo-constants";
import { getIPv4Address } from "../ip/ip";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    bgColor: StatusBar.backgroundColor,
    isLoading: true,
    token: "",
    isLoggedIn: false
  };
  handleColor = color => {
    this.setState({ bgColor: color });
  };
  loggedInCheck = async () => {
    const obj = await getFromStorage("LasaaniBiryani");

    if (obj && obj.token) {
      this.setState({ isLoading: true, isLoggedIn: true });
      setTimeout(() => this.props.navigation.navigate("Pages"), 1000);
    } else {
      this.setState({ isLoggedIn: false, isLoading: false });
    }
  };
  loginHandler = () => {
    const { email, password } = this.state;

    fetch("http://" + getIPv4Address() + "/profiles/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage("LasaaniBiryani", { token: json.token });
          this.setState({
            token: json.token,
            isLoading: true,
            email: "",
            password: ""
          });
          setTimeout(() => this.props.navigation.navigate("Pages"), 200);
        } else {
          alert("Email or Password Incorrect");
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  handleAndroidBackButton = () => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  };
  handleBackPress = () => {
    setTimeout(() => {
      return true;
    }, 100);
  };
  removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener("hardwareBackPress", () => {});
  };

  onFocusFunction = () => {
    if (this.state.isLoggedIn) {
      BackHandler.exitApp();
    }
    this.loggedInCheck();
  };

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this.onFocusFunction();
    });
    this.handleAndroidBackButton();
  }

  componentWillUnmount() {
    this.focusListener.remove();
    this.removeAndroidBackButtonHandler();
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3b5998"
          }}
        >
          {!this.state.isLoading ? (
            <View>
              <View style={{ marginBottom: 50 }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 50
                  }}
                >
                  Facebook
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: 15,
                    fontWeight: "bold"
                  }}
                >
                  Email:
                </Text>
                <TextInput
                  placeholder="Email or Phone"
                  style={{
                    height: 40,
                    borderColor: "white",
                    borderWidth: 1,
                    backgroundColor: "white",
                    width: responsiveWidth(65),
                    borderRadius: 5,
                    paddingLeft: 10
                  }}
                  name="email"
                  onChangeText={value => this.setState({ email: value })}
                  value={this.state.email}
                />

                <Text
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop: 10
                  }}
                >
                  Password:
                </Text>

                <PasswordInputText
                  placeholder="Password"
                  style={{
                    backgroundColor: "white",
                    width: responsiveWidth(65),
                    borderRadius: 5,
                    paddingLeft: 10
                  }}
                  name="password"
                  onChangeText={value => this.setState({ password: value })}
                  value={this.state.password}
                />
              </View>
              <TouchableOpacity onPress={this.loginHandler}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#3b5998",
                    backgroundColor: "white",
                    width: responsiveWidth(65),
                    height: 40,
                    borderRadius: 2,
                    paddingLeft: 86,
                    paddingTop: 5,
                    marginTop: 30
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Signup");
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "white",
                    marginTop: 10
                  }}
                >
                  Don't Have Account?
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Loading />
          )}
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3b5998"
          }}
        >
          <Loading />
        </View>
      );
    }
  }
}
export default LoginPage;
