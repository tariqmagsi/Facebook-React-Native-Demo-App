import React, { Component } from "react";
import { Text, View, TextInput, BackHandler } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import PasswordInputText from "react-native-hide-show-password-input";
import { TouchableOpacity } from "react-native-gesture-handler";
import validator from "validator";
import { setInStorage, getFromStorage } from "../storage/storage";
import Loading from "../Login/Loading";
import { getIPv4Address } from "../ip/ip";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    re_enter_password: "",
    token: "",
    isLoggedIn: false,
    isLoading: true
  };
  nameError = () => {
    for (let i = 0; i < 10; i++) {
      if (this.state.name.includes(i)) {
        alert("Name can't be a number");
        return false;
      }
    }
    return true;
  };
  emailError = () => {
    if (!validator.isEmail(this.state.email)) {
      alert("Email not correct");
      return false;
    }
    return true;
  };
  passError = () => {
    if (this.state.password.length < 8) {
      alert("Password Must be of 8 or more characters");
    } else if (this.state.password !== this.state.re_enter_password) {
      alert("Password and Re-Enter Password not matched");
    } else {
      return true;
    }
    return false;
  };
  requiredError = () => {
    if (
      this.state.name.trim() === "" ||
      this.state.email.trim() === "" ||
      this.state.password.trim() === "" ||
      this.state.re_enter_password === ""
    ) {
      alert("All Fields are Required");
      return false;
    }
    return true;
  };
  SignupHandler = () => {
    if (
      this.requiredError() &&
      this.nameError() &&
      this.emailError() &&
      this.passError()
    ) {
      fetch("http://" + getIPv4Address() + "/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            setInStorage("LasaaniBiryani", { token: json.token });
            this.setState({
              name: "",
              email: "",
              password: "",
              re_enter_password: "",
              isLoading: true
            });
            setTimeout(() => this.props.navigation.navigate("Pages"), 200);
          } else {
            alert(json.message);
          }
        });
    }
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
              <View style={{ marginBottom: 5 }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 30
                  }}
                >
                  Signup
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
                  Name:
                </Text>
                <TextInput
                  placeholder="Name"
                  style={{
                    height: 40,
                    borderColor: "white",
                    borderWidth: 1,
                    backgroundColor: "white",
                    width: responsiveWidth(65),
                    borderRadius: 5,
                    paddingLeft: 10
                  }}
                  name="name"
                  onChangeText={value => this.setState({ name: value })}
                  value={this.state.name}
                />
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
                  placeholder="Email"
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
                <Text
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop: 10
                  }}
                >
                  Re-Password:
                </Text>

                <PasswordInputText
                  placeholder="Re-Enter Password"
                  style={{
                    backgroundColor: "white",
                    width: responsiveWidth(65),
                    borderRadius: 5,
                    paddingLeft: 10
                  }}
                  name="re-enter password"
                  onChangeText={value =>
                    this.setState({ re_enter_password: value })
                  }
                  value={this.state.re_enter_password}
                />
              </View>
              <TouchableOpacity onPress={this.SignupHandler}>
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
                  Signup
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
