//import { StatusBar } from 'expo-status-bar';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TextInput,
    Image,
    FlatList,
} from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppScreen from "./app/components/AppScreen";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppButton from "./app/components/buttons/AppButton";
import colors from "./app/config/colors";
import IconButton from "./app/components/buttons/IconButton";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
    return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
