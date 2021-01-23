import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import useAuth from "../auth/useAuth";

import AppScreen from "../components/AppScreen";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.primary,
            },
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: colors.secondary,
            },
            targetScreen: "Messages",
        },
    ];

    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/huy.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    ItemSeparatorComponent={ListItemSeparator}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                    iconColor={colors.white}
                                />
                            }
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                />
            </View>

            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={() => logOut()}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        flex: 1,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
