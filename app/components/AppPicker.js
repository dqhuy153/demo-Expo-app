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

function AppPicker({
    iconName,
    items,
    onSelectItem,
    numberOfColumns,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%",
}) {
    const [modelVisible, setModelVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {iconName && (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholderText}>
                            {placeholder}
                        </AppText>
                    )}

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
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
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
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
    placeholderText: {
        flex: 1,
        color: defaultStyles.colors.medium,
    },
    text: {
        flex: 1,
    },
});

export default AppPicker;
