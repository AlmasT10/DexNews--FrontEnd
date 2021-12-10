import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    // borderTopRightRadius: 80,
    // borderBottomLeftRadius: 80,
    // height: h * 0.5,
    // width: w * 0.9,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    fontFamily: "Poppins_400Regular",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
});

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <Swiper
      buttonWrapperStyle={{
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
      style={styles.wrapper}
      showsButtons={true}
      paginationStyle={{
        marginRight: w * 0.7,
        marginBottom: h * 0.02,
      }}
      activeDotColor="#307AFF"
      dotColor="#E9EFFF"
      nextButton={
        <View
          style={{
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            backgroundColor: "#307AFF",
          }}
        >
          <AntDesign
            name="arrowright"
            size={22}
            color="#FFF"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      }
      prevButton={
        <View
          style={{
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            backgroundColor: "#307AFF",
            marginHorizontal: 20,
          }}
        >
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </View>
      }
    >
      <View style={styles.slide}>
        <Image
          source={require("../assets/latest-news.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Latest News</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo
        </Text>
      </View>

      <View style={styles.slide}>
        <Image
          source={require("../assets/save-for-later.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Save For Later</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo
        </Text>
      </View>
    </Swiper>
  );
  // }
};

export default OnBoardingScreen;
