import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image, SearchBar, ListItem, Avatar } from "react-native-elements";

const HomeFeedScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=be209dfe2f554400a9e6e3e214fdc366"
      );
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={item.urlToImage && { uri: item.urlToImage }} />
      <ListItem.Content>
        <ListItem.Title style={{ color: "blue" }}>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        <Text>{item.author}</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/Logo.png")}
            style={{ width: 60, height: 32 }}
          />
          <SearchBar
            round
            containerStyle={styles.searchCon}
            inputContainerStyle={styles.search}
          />
        </View>
        <FlatList
          keyExtractor={keyExtractor}
          data={articles}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeFeedScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchCon: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  search: {
    backgroundColor: "transparent",
    color: "transparent",
    borderColor: "black",
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.7,
  },
});
