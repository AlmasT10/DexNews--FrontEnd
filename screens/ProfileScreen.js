import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Avatar, Icon, Input, Text } from "react-native-elements";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4> Profile </Text>
        <Icon name="logout" brand="antdesign" />
      </View>
      <View style={styles.profile}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Input containerStyle={styles.name} />
          <Icon name="edit" brand="antdesign" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Input containerStyle={styles.name} />
          <Icon name="edit" brand="antdesign" />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    padding: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    width: Dimensions.get("window").width * 0.6,
  },
  profile: {
    padding: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
