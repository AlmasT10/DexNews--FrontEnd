import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const Comment = () => {
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
        <FlatList />
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Input
            placeholder="Enter comment"
            containerStyle={{ width: Dimensions.get("window").width * 0.7 }}
          />
          <Button title="Submit" />
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
