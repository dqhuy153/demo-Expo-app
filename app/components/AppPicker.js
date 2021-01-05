import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import AppScreen from "./AppScreen";
import PickerItem from "./PickerItem";

function AppPickerH({
    iconName,
    items,
    onSelectItem,
    placeholder,
    selectedItem,
}) {
    const [modelVisible, setModelVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
                <View style={styles.container}>
                    {iconName && (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modelVisible} animationType="slide">
                <AppScreen>
                    <Button
                        title="Close"
                        onPress={() => setModelVisible(false)}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModelVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </AppScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    text: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    },
});

export default AppPickerH;
