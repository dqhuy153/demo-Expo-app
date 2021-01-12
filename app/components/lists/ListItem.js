import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";

function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={defaultStyles.colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} style={styles.title}>
                            {title}
                        </AppText>
                        {subTitle && (
                            <AppText numberOfLines={2} style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={30}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        backgroundColor: defaultStyles.colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    detailsContainer: {
        paddingHorizontal: 15,
        flex: 1,
    },
    title: {
        fontWeight: "700",
        fontSize: 17,
    },
    subTitle: {
        fontWeight: "400",
        fontSize: 15,
        color: defaultStyles.colors.medium,
    },
});

export default ListItem;
