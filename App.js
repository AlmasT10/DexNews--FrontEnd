import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import HomeFeedScreen from "./screens/HomeFeedScreen";
import CategorySelectionScreen from "./screens/CategorySelectionScreen";
import SavedArticlesScreen from "./screens/SavedArticlesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NewsDetailsScreen from "./screens/NewsDetailScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import NewsFeedScreen from "./screens/NewsFeedScreen";
import PreferenceScreen from "./screens/PreferenceScreen";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NewsStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsHome"
        component={HomeFeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function CategoryNewsStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={CategorySelectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryFeed"
        component={NewsFeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailNews"
        component={NewsDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={NewsStack}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icon name="home" />,
          tabBarActiveTintColor: "red",
        }}
      />
      <Tab.Screen
        name="CategoryStack"
        component={CategoryNewsStack}
        options={{
          headerShown: false,
          tabBarLabel: "Category",
          tabBarIcon: (props) => <Icon name="category" brand="materialicons" />,
          tabBarActiveTintColor: "red",
        }}
      />
      <Tab.Screen
        name="SavedArticles"
        component={SavedArticlesScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icon name="article" brand="materialicons" />,
          tabBarActiveTintColor: "red",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icon name="person" brand="materialicons" />,
          tabBarActiveTintColor: "red",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Onboarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preferences"
          component={PreferenceScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
