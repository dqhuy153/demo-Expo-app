import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import AppScreen from "../components/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen(props) {
    return (
        <AppScreen style={styles.screen}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(value) => console.log(value)}
                validationSchema={validationSchema}
            >
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
