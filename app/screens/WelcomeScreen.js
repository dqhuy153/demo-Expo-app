import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/buttons/AppButton";
import AppText from "../components/AppText";
function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
            blurRadius={0}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <AppText style={styles.tagline}>
                    Sell What You Don't Need
                </AppText>
            </View>
            <View style={styles.btnsContainer}>
                <AppButton
                    title="login"
                    onPress={() => navigation.navigate("Login")}
                ></AppButton>
                <AppButton
                    title="register"
                    onPress={() => navigation.navigate("Register")}
                    color="secondary"
                ></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    btnsContainer: {
        width: "100%",
        padding: 20,
    },
    registerBtn: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        marginVertical: 10,
    },
});

export default WelcomeScreen;
