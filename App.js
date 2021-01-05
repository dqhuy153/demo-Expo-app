//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TextInput,
} from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppScreen from "./app/components/AppScreen";
import AppTextInput from "./app/components/AppTextInput";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
    return <LoginScreen />;
}

const styles = StyleSheet.create({});
