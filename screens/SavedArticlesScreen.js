import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  Image,
  SearchBar,
  ListItem,
  Avatar,
  Text,
  Icon,
} from "react-native-elements";
import baseURL from "../assets/common/baseURL";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { currentUser } from "./LoginScreen";

const SavedArticlesScreen = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);

  // try {
  //   AsyncStorage.getItem(currentUser.id).then((res) => {
  //     let jsonObject = JSON.parse(result);
  //     console.log(jsonObject);
  //     setArticles(jsonObject);
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(`${baseURL}saved/${currentUser.id}`);
      // setArticles(res.data.articles);
      console.log(res.data.news);
      setArticles(res.data);
    };
    getArticles();
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(`${baseURL}news/${category}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         setArticles(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //     return () => {
  //       setArticles([]);
  //     };
  //   }, []);

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        navigation.navigate("NewsDetails", { detail: item.news });
      }}
      containerStyle={{ marginVertical: 5, borderRadius: 10 }}
    >
      <Avatar
        source={item.news.urlToImage && { uri: item.news.urlToImage }}
        size="xlarge"
        avatarStyle={{ resizeMode: "stretch" }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ color: "blue" }}>
          {item.news.title}
        </ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        <Text style={{ color: "red" }}>{item.news.author}</Text>
        <Text style={{ color: "red" }}>{item.news.source.name}</Text>
        <Text>{item.news.publishedAt}</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <View style={{ paddingTop: 30 }}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              paddingVertical: 10,
              justifyContent: "space-evenly",
            }}
          >
            <Text h3>Saved Articles</Text>
          </View>
          <FlatList
            keyExtractor={keyExtractor}
            data={articles}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SavedArticlesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchCon: {
    backgroundColor: "#eee",
    borderRadius: 10,
    borderWidth: 1,
  },
  search: {
    backgroundColor: "transparent",
    width: Dimensions.get("window").width * 0.7,
    height: 30,
  },
});
