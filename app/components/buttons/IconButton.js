import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function IconButton({
    backgroundColor = colors.light,
    height = 120,
    iconColor = colors.medium,
    name,
    onPress,
    size = 45,
    width = 120,
}) {
    return (
        <TouchableOpacity
            style={[
                styles.btn,
                {
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                },
            ]}
            onPress={onPress}
        >
            <MaterialCommunityIcons name={name} size={size} color={iconColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 20,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
});

export default IconButton;
