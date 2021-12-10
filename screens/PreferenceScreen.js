import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
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
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

const width_proportion = "80%";

const multipleGroupData = [
  { value: "Local" },
  { value: "Sports" },
  { value: "Entertainment" },
  { value: "Health" },
  { value: "Technology" },
  { value: "Education" },
  { value: "Politics" },
  { value: "Science" },
];

const PreferenceScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.preferencesText}>
        Save your interests for better content and user experience.
      </Text>

      <SelectMultipleGroupButton
        //   defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
        containerViewStyle={{ justifyContent: "space-between", padding: 15 }}
        highLightStyle={{
          borderColor: "gray",
          backgroundColor: "white",
          textColor: "black",
          borderTintColor: "blue",
          backgroundTintColor: "blue",
          textTintColor: "white",
        }}
        //   onSelectedValuesChange={selectedValues =>
        //     this._groupButtonOnSelectedValuesChange(selectedValues)
        //   }
        group={multipleGroupData}
      />

      {/* <View style={styles.preferencesBtnsContainer}>
        <TouchableOpacity >
          <Text style={styles.preferencesChoiceBtn}>Local News</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn2}>Sports</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn3}>Entertainment</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn4}>Health</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn5}>Technology</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn6}>Education</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn7}>Politics</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.preferencesChoiceBtn8}>Science</Text>
        </TouchableOpacity>
      </View> */}

      <Button
        title="Save Interest"
        buttonStyle={{
          backgroundColor: "white",
          width: "70%",
          alignSelf: "center",
        }}
        titleStyle={{ color: "black" }}
        onPress={() => {
          navigation.navigate("Main");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#307AFF",
  },

  preferencesText: {
    width: "80%",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 60,
    color: "#FFFFFF",
  },

  preferncesBtn: {
    width: "80%",
    height: 46,
    textAlign: "center",
    position: "relative",
    // justifyContent: "flex-end",
    top: 300,
    fontSize: 16,
    fontWeight: "bold",
    color: "#307AFF",
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    // alignSelf: "center",
    // position: "absolute",
    // bottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },

  preferencesBtnsContainer: {
    flexDirection: "row",
    width: "80%",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default PreferenceScreen;
