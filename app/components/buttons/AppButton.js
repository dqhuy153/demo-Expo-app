import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../../config/colors";
function AppButton({ color = "primary", onPress, title }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btn, { backgroundColor: colors[color] }]}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        height: 50,
        backgroundColor: "#fc5c65",
        borderRadius: 40,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    text: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.white,
        fontSize: 18,
    },
});
export default AppButton;
