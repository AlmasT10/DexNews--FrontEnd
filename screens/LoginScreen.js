// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { AppLoading } from "expo-app-loading";
// import {
//   useFonts,
//   Poppins_500Medium,
//   Poppins_600Semi_Bold
// } from "@expo-google-fonts/poppins";
// import { StatusBar } from "expo-status-bar";

// export function App() {
//   let [fontsLoaded, error] = useFonts({
//     Poppins_500Medium,
//     Poppins_600SemiBold,
//   });

//   if (!fontsLoaded){
//     return <AppLoading />;
//   }
// }

// const LoginScreen = () => {

//   return (
//     <View>
//       <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 28, paddingTop: 50, textAlign: "center"}}>Hello</Text>
//       <StatusBar style ="auto" />
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import {
  useFonts,
  Poppins_500Mediun,
  Poppins_600Semi_Bold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import baseURL from "../assets/common/baseURL";
const width_proportion = "80%";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setVisible] = useState(false);
  const navigation = useNavigation();

  const signIn = () => {
    let user = {
      email: email,
      password: password,
    };

    axios
      .get(`${baseURL}users/?${user.email}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (email == "" || password == "") {
      console.log("error login");
    } else {
      // loginUser(user);
      navigation.navigate("Main");
    }
  };
  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.imageLogo}
        source={require("../assets/Logo.png")}
      ></Image>
      <View style={styles.formContainer}>
        <Text style={styles.formTextLogin}>Login</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.formInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            signIn();
          }}
        >
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.firebaseBtnContainer}>
          <TouchableOpacity style={styles.fbaseBtnGoogle}>
            <Image
              style={styles.fbaseBtnGoogleImage}
              source={require("../assets/google.png")}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fbaseBtnFacebook}>
            <Image
              style={styles.fbaseBtnFacebookImage}
              source={require("../assets/facebook.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.signupBtn}>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.signupBtnF}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#E9EFFF",
  },

  imageLogo: {
    height: 62,
    width: 86,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
  },

  formContainer: {
    backgroundColor: "#FFFFFF",
    height: 450,
    width: width_proportion,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },

  formTextLogin: {
    marginLeft: 20,
    marginTop: 40,
    fontFamily: Poppins_600Semi_Bold,
    fontSize: 28,
    fontWeight: "700",
  },

  formInput: {
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    backgroundColor: "#E9EFFF",
  },

  forgotButton: {
    color: "#307AFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    textAlign: "right",
    fontSize: 15,
    fontWeight: "700",
  },

  loginButton: {
    color: "#FFFFFF",
    backgroundColor: "#307AFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    height: 46,
    borderRadius: 10,
    textAlign: "center",
  },

  orText: {
    textAlign: "center",
    color: "#777777",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },

  absoluteView: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  fbaseBtnGoogle: {
    backgroundColor: "#EC3D31",
    color: "#FFFFFF",
    height: 40,
  },

  signupBtn: {
    textAlign: "center",
    fontSize: 20,
    color: "#333333",
    paddingTop: 20,
  },

  signupBtnF: {
    color: "#307AFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  fbaseBtnGoogle: {
    backgroundColor: "#EC3D31",
    color: "#FFFFFF",
    height: 30,
    width: "40%",
    textAlign: "center",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
    shadowColor: "#303838",
  },

  fbaseBtnGoogleImage: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: 18,
    width: 18,
  },

  fbaseBtnFacebook: {
    backgroundColor: "#3B5998",
    color: "#FFFFFF",
    height: 30,
    width: "40%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: -50,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
    shadowColor: "#303838",
  },

  fbaseBtnFacebookImage: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: 18,
    width: 18,
  },

  signupBtn: {
    textAlign: "center",
    fontSize: 20,
    color: "#333333",
    paddingTop: 20,
  },

  signupBtnF: {
    color: "#307AFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
