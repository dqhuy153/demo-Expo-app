import React from "react";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import AppScreen from "../components/AppScreen";
import {
    AppForm,
    AppFormField,
    ErrorMessage,
    SubmitButton,
} from "../components/forms";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);

        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        logIn(result.data);
    };

    return (
        <AppScreen style={styles.screen}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password."
                    visible={loginFailed}
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconName="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconName="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />
                <SubmitButton title="login" />
            </AppForm>
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
