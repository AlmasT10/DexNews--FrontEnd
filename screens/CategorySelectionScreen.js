import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const CategorySelectionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoryHeadTitle}>Categories</Text>
      <View style={styles.categoriesContainerInner}>
        <ScrollView style={styles.categoriesScroller}>
          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "canada" });
            }}
          >
            <ImageBackground
              source={require("../assets/localnews.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Local News</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "sport" });
            }}
          >
            <ImageBackground
              source={require("../assets/sports.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Sports</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "entertainment" });
            }}
          >
            <ImageBackground
              source={require("../assets/entertainment.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Entertainment</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "health" });
            }}
          >
            <ImageBackground
              source={require("../assets/healthn.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Health</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "technology" });
            }}
          >
            <ImageBackground
              source={require("../assets/technology.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Technology</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "education" });
            }}
          >
            <ImageBackground
              source={require("../assets/education.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Education</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "politics" });
            }}
          >
            <ImageBackground
              source={require("../assets/politics.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Politics</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.catBtn}
            onPress={() => {
              navigation.navigate("CategoryFeed", { title: "science" });
            }}
          >
            <ImageBackground
              source={require("../assets/science.png")}
              style={styles.catImage}
            >
              <Text style={styles.catTitle}>Science</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategorySelectionScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    width: "90%",
    // backgroundColor: "#F87CC2",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
  },

  categoryHeadTitle: {
    fontSize: 24,
    color: "#222222",
    fontWeight: "bold",
    marginBottom: 30,
  },

  catBtn: {
    marginBottom: 20,
    minHeight: 80,
    borderRadius: 10,
  },

  catImage: {
    width: "100%",
    minHeight: 80,
    borderRadius: 10,
  },

  catTitle: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  categoriesContainerInner: {
    marginBottom: 120,
  },
});
