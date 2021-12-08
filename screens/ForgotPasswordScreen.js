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

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.imageLogo}
        source={require("../assets/Logo.png")}
      ></Image>
      <View style={styles.formContainer}>
        <Text style={styles.formTextLogin}>Forgot Password</Text>
        <TextInput style={styles.formInput} placeholder="Email" />

        <Text style={styles.forgotText}>
          Enter your registered email address. We will send you reset password
          instructions email
        </Text>

        <TouchableOpacity>
          <Text style={styles.resetBtn}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>

        <View style={styles.firebaseBtnContainer}>
          <TouchableOpacity>
            <View style={styles.absoluteView}>
              <Text style={styles.fbaseBtnGoogle}></Text>
            </View>
            <Image
              style={styles}
              source={require("../assets/google.png")}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.absoluteView}>
              <Text style={styles.fbaseBtnGoogle}></Text>
            </View>
            <Image
              style={styles}
              source={require("../assets/facebook.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
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
    height: 350,
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

  resetBtn: {
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

  forgotText: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    fontSize: 12,
    color: "#444444",
    marginTop: 15,
  },

  cancelBtn: {
    textAlign: "center",
    color: "#EC3D31",
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default ForgotPasswordScreen;
