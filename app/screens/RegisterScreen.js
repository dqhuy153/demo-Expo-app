import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import AppScreen from "../components/AppScreen";
import {
    AppForm,
    AppFormField,
    ErrorMessage,
    SubmitButton,
} from "../components/forms";
import usersApi from "../api/users";
import { useState } from "react";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen(props) {
    const { logIn } = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await usersApi.register(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await authApi.login(
            userInfo.email,
            userInfo.password
        );
        logIn(authToken);
    };

    return (
        <AppScreen style={styles.screen}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible />
                <AppFormField
                    autoCorrect={false}
                    iconName="account"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                    autoCapitalize="words"
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
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="register" />
            </AppForm>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
});

export default RegisterScreen;
