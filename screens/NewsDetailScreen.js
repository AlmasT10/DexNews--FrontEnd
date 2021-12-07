import React, { useState } from "react";
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
  Pressable,
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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Heart from "react-animated-heart";
const width_proportion = "80%";

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

const NewsDetailsScreen = () => {
  // const animation = React.useRef(null);

  // isLiked = false;

  // React.useEffect(() => {
  //   if (isLiked){
  //     animation.current.play(66, 66);
  //   } else {
  //     animation.current.play(19, 19);
  //   }
  // }, [isLiked]);

  const [isClick, setClick] = useState(false);
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={{ width: "100%", height: 300 }}
        source={require("../assets/news-Image.png")}
      >
        <Text style={styles.newsLabel}>Games</Text>
        <Text style={styles.newsTitle}>
          Apex Legends Tier List Ranks Characters Based on 'Common Ways' They
          Die
        </Text>
      </ImageBackground>
      <View style={styles.newsTextContainer}>
        <View style={styles.buttonsContainer}>
          <FontAwesome.Button name="play" style={styles.listenBtn}>
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
        </View>

        <SafeAreaView style={styles.newsTextContainerSafe}>
          <ScrollView style={styles.newsScrollBar}>
            <Text style={styles.newsText}>
              Apex Legends is a game that’s constantly changing. This year alone
              has seen new maps, new legends, new items like Heat Shields, new
              weapons, and more. However, one thing that is constant—or so it
              seems—is how often certain characters play. It’s all a bit of fun,
              but there are always jokes about TTV Wraiths who break off from
              the squad, get killed immediately, and break off from the squad.
              {"\n"} {"\n"}
              Of course, that’s not how everyone plays Wraith in Apex Legends,
              but it’s a funny, in-community joke. Now, TheKingofHats007 has
              posted a “tier list” that ranks characters based on the common
              ways they see them die. He had posted this before, but this season
              11 edition captures some hilarious aspects of the current meta.
              {"\n"} {"\n"}
              The “run-in, 1v3’d, knocked and leaves” tier belongs to Wraith and
              Octane, fitting that sort of rush in and die aspect fans have
              likely seen from randoms online. Again, it’s not always true in
              Apex Legends, but it’s quite hilarious nonetheless. The second
              tier is described as “betrayed by their tactical,” and it includes
              Pathfinder, Bangalore, and Valkyrie. Indeed, there’s been many a
              time where Bangalore has used her smoke to her dismay, against
              opponents who can counter it, while flying deliver bombs as
              Valkyrie leaves her open for a good R-301 beam.{"\n"} {"\n"}
              “Betrayed by their Ultimate” belongs to Ash and Bloodhound, with
              the former zooming themselves into bad situations and Bloodhound’s
              ultimate, however helpful, being heard from a mile away. Apex
              Legends characters who die because they are “too confident in both
              [tactical and ultimate] include Mirage, Revenant, Fuse, Seer, and
              Horizon.{"\n"} {"\n"}
              “Caught in the wide, wide open fields” tier is occupied mostly by
              characters who should never be in an open-field scenario: Caustic,
              Wattson, Rampart, and Loba. For the three defensive legends, open
              fields basically wreck their abilities, while one could argue that
              Loba also gets betrayed by her tactical. Once she re-appears,
              smart players can lock on and take her out. “Abandoned by their
              team + dies alone” goes to Crypto and Lifeline, as the latter may
              not be playing the best Lifeline, and Crypto’s ability often
              separates him from the squad.{"\n"} {"\n"}
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
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
    marginLeft: 20,
    marginTop: 10,
    color: "#FFFFFF",
    lineHeight: 30,
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
    // width: "20%",
    marginLeft: 20,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#FFFFFF",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default NewsDetailsScreen;
