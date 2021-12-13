import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Image,
  SearchBar,
  ListItem,
  Avatar,
  Icon,
} from "react-native-elements";
import baseURL from "../assets/common/baseURL";

const NewsFeedScreen = ({ route }) => {
  const category = route.params.title;
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [search, updateSearch] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(`${baseURL}news/${category}`);
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  const searchNews = (text) => {
    updateSearch(text);

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${search}&category=${category}&apiKey=e16066e676bd40fd9853b4c46f2b9059`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        navigation.navigate("NewsDetails", { detail: item });
      }}
      containerStyle={{ marginVertical: 5, borderRadius: 10 }}
    >
      <Avatar
        source={item.urlToImage && { uri: item.urlToImage }}
        size="xlarge"
        avatarStyle={{ resizeMode: "stretch" }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ color: "blue" }}>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        <Text style={{ color: "red" }}>{item.author}</Text>
        <Text style={{ color: "red" }}>{item.source.name}</Text>
        <Text>{item.publishedAt}</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Icon
            name="arrow-back"
            brand="ionicons"
            onPress={() => {
              navigation.navigate("Category");
            }}
          />
          <SearchBar
            round
            containerStyle={styles.searchCon}
            inputContainerStyle={styles.search}
            placeholder="Type Here..."
            onChangeText={(text) => searchNews(text)}
            value={search}
          />
        </View>
        <FlatList
          keyExtractor={keyExtractor}
          data={articles}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default NewsFeedScreen;

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
