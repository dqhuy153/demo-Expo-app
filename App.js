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
    Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
    CardStyleInterpolators,
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

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
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppButton from "./app/components/buttons/AppButton";
import colors from "./app/config/colors";
import IconButton from "./app/components/buttons/IconButton";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    //restoreToken when login successful and not come back to login screen when restart
    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) return setUser(user);
    };

    if (!isReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onError={(error) => console.log(error)}
                onFinish={() => setIsReady(true)}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({});
