import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image, SearchBar } from "react-native-elements";

const HomeFeedScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/Logo.png")}
            style={{ width: 60, height: 32 }}
          />
          <SearchBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeFeedScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
