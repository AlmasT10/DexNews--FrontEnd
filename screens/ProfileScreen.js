import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Avatar, Button, Icon, Input, Text } from "react-native-elements";
import { currentUser } from "./LoginScreen";
import PreferenceScreen from "./PreferenceScreen";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isEnabled, setEnabled] = useState(false);

  const [image, setImage] = useState(
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  );
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response);
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4> Profile </Text>
        <Icon
          name="logout"
          brand="antdesign"
          raised
          color="red"
          containerStyle={{ backfaceVisibility: "#000" }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
      <View style={styles.profile}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: image,
          }}
        >
          <Avatar.Accessory onPress={pickImage} size={34} />
        </Avatar>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Input
                containerStyle={styles.name}
                value={name}
                onChangeText={(text) => setName(text)}
                disabled={isEnabled}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Input
                containerStyle={styles.name}
                value={email}
                onChangeText={(text) => setEmail(text)}
                disabled={isEnabled}
              />
            </View>
          </View>
          <Icon
            name="edit"
            brand="antdesign"
            onPress={() => setEnabled(!isEnabled)}
          />
          <Button title="Save" buttonStyle={{ paddingLeft: 10 }} />
        </View>
      </View>
      <View style={{ borderWidth: 0.5, marginBottom: 10 }}></View>
      <PreferenceScreen />
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
