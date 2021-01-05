import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.screen}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                iconName="email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                iconName="lock"
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
            />
            <AppButton
                title="login"
                onPress={() => console.log(email, password)}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        alignSelf: "center",
    },
});

export default LoginScreen;
