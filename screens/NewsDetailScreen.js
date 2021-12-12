import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Linking,
  Pressable,
  Button,
} from "react-native";
import { Dimensions } from "react-native";
import {
  useFonts,
  Poppins_500Mediun,
  Poppins_600Semi_Bold,
} from "@expo-google-fonts/poppins";

import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from "react-native-selectmultiple-button";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import store from "react-native-simple-store";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Heart from "react-animated-heart";
const width_proportion = "80%";
import Comment from "../components/Comment";
import * as Speech from "expo-speech";
import { Icon } from "react-native-elements";
import axios from "axios";
import baseURL from "../assets/common/baseURL";
import { currentUser } from "./LoginScreen";

const likeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={() => setiked((isLiked) => !isLiked)}>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "red" : "black"}
      />
    </Pressable>
  );
};

const NewsDetailsScreen = ({ route }) => {
  const news = route.params.detail;

  const speak = () => {
    Speech.speak(news.title);
    Speech.speak(news.content);
  };

  const save = () => {
    const data = {
      news: news,
      user: currentUser,
    };

    const dataArray = [];
    dataArray.push(news);
    try {
      AsyncStorage.setItem(currentUser.id, JSON.stringify(dataArray));
    } catch (err) {
      console.log(err);
    }

    axios
      .post(`${baseURL}saved`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const animation = React.useRef(null);

  // isLiked = false;

  // React.useEffect(() => {
  //   if (isLiked){
  //     animation.current.play(66, 66);
  //   } else {
  //     animation.current.play(19, 19);
  //   }
  // }, [isLiked]);

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  const [isClick, setClick] = useState(false);
  return (
    <ScrollView style={styles.screenContainer}>
      <ImageBackground
        style={{ width: "100%", height: 300 }}
        source={news.urlToImage && { uri: news.urlToImage }}
      >
        {/* <Text style={styles.newsLabel}>Games</Text> */}
      </ImageBackground>
      <View style={styles.newsTextContainer}>
        <View style={styles.buttonsContainer}>
          <FontAwesome.Button
            name="play"
            style={styles.listenBtn}
            onPress={speak}
          >
            <Text>Listen</Text>
          </FontAwesome.Button>
          <LottieView
            // ref={animation}
            style={styles.heartLottie}
            source={require("../assets/lottie/like.json")}
            // autoPlay={true}
            // loop={false}
            autoPlay
          />
          <FontAwesome.Button
            name="bookmark"
            style={styles.bookmarkBtn}
          ></FontAwesome.Button>
          <FontAwesome.Button
            name="share-alt"
            style={styles.shareBtn}
          ></FontAwesome.Button>
          <FontAwesome.Button
            name="save"
            onPress={save}
            style={styles.shareBtn}
          ></FontAwesome.Button>
        </View>

        <SafeAreaView style={styles.newsTextContainerSafe}>
          <ScrollView style={styles.newsScrollBar}>
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsText}>{news.content}</Text>
            <Text>For More Information: </Text>
            <OpenURLButton url={news.url}>{news.url}</OpenURLButton>
            <Comment />
          </ScrollView>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
  },

  newsImage: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: 70
  },

  newsLabel: {
    backgroundColor: "#307AFF",
    width: "auto",
    marginLeft: 20,
    marginTop: 140,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 20,
    position: "relative",
  },

  newsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  newsTextContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginTop: -20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: "flex-start",
  },

  ttsButton: {
    backgroundColor: "#307AFF",
    width: "auto",
    marginLeft: 20,
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    position: "relative",
  },

  newsTextContainerSafe: {
    width: "auto",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 5,
    paddingBottom: 20,
    textAlign: "justify",
  },

  newsText: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 30,
  },

  heart: {
    width: 20,
    height: 20,
    tintColor: "#6e7f8d",
  },

  heartFilled: {
    tintColor: "#df245e",
  },

  heartLottie: {
    width: 40,
    height: 40,
    marginLeft: 5,
    position: "relative",
    right: 0,
    // textAlign: "right",
  },

  shareBtn: {
    color: "#333333",
    backgroundColor: "#00000000",
    marginLeft: 20,
  },

  listenBtn: {
    backgroundColor: "#307AFF",
    color: "#FFFFFF",
    marginLeft: 20,
    marginTop: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    justifyContent: "space-evenly",
  },
});

export default NewsDetailsScreen;
