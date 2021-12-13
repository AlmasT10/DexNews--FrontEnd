import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { currentUser } from "../screens/LoginScreen";
import axios from "axios";
import baseURL from "../assets/common/baseURL";
import { ListItem } from "react-native-elements";

const Comment = (props) => {
  const navigation = useNavigation();
  const [comInput, SetComInput] = useState("");
  const [list, SetList] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(`${baseURL}comments/${props.postId}`);
      SetList(res.data);
      // await axios
      //   .get(`${baseURL}comments/${props.postId}`)
      //   .then((res) => {
      //     console.log(res.data);
      //     SetList(res.data);
      //   })
      //   .catch((err) => console.log(err));
    };
    getArticles();
  }, []);

  const sendComment = (comInput) => {
    let com = {
      writer: currentUser.name,
      postId: props.postId,
      content: comInput,
    };

    axios
      .post(`${baseURL}comments/save`, com)
      .then((res) => {
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={{ marginVertical: 5, borderRadius: 10 }}
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: "blue" }}>{item.writer}</ListItem.Title>
        <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
        <Text style={{ color: "red" }}>{item.createdAt}</Text>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <View style={styles.commentContainer}>
      <Text h4>Comments</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Input
            value={comInput}
            onChangeText={(text) => SetComInput(text)}
            placeholder="Enter comment"
            containerStyle={{ width: Dimensions.get("window").width * 0.7 }}
          />
          <Button title="Submit" onPress={() => sendComment(comInput)} />
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    paddingBottom: 40,
  },
});
