import React from "react";
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

const width_proportion = "80%";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <Text style={styles.skipSignupBtn}>Skip</Text>
      </TouchableOpacity>
      <Image
        style={styles.imageLogo}
        source={require("../assets/Logo.png")}
      ></Image>
      <View style={styles.formContainer}>
        <Text style={styles.formTextLogin}>Sign Up</Text>
        <TextInput style={styles.formInput} placeholder="Full Name" />

        <TextInput style={styles.formInput} placeholder="Email" />

        <TextInput style={styles.formInput} placeholder="Password" />

        {/* <TouchableOpacity>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Preferences");
          }}
        >
          <Text style={styles.loginButton}>Sign Up</Text>
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

      <Text style={styles.signupBtn}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.signupBtnF}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#E9EFFF",
  },

  skipSignupBtn: {
    color: "#222222",
    textAlign: "right",
    marginRight: 30,
    // marginTop: 30,
    position: "relative",
    top: 50,
    fontSize: 16,
    fontWeight: "bold",
  },

  imageLogo: {
    height: 62,
    width: 86,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 70,
  },

  formContainer: {
    backgroundColor: "#FFFFFF",
    height: 480,
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
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    height: 46,
    borderRadius: 10,
    textAlignVertical: "center",
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

export default RegisterScreen;
