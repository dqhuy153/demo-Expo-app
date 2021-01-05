import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

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
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
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
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    detailsContainer: {
        paddingHorizontal: 15,
    },
    title: {
        fontWeight: "700",
        fontSize: 17,
    },
    subTitle: {
        fontWeight: "400",
        fontSize: 15,
        color: colors.medium,
    },
});

export default ListItem;
