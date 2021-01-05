import React, { useState } from "react";
import { FlatList, StyleSheet, Platform, StatusBar, View } from "react-native";

import ListItem from "../components/ListItem";
import AppScreen from "../components/AppScreen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/huy.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/huy.jpg"),
    },
];

function MessagesScreen(props) {
    //--Hook
    //const [count, setCount] = useState(0);
    //const count = array[0];
    //const setCount = array[1]; //setState

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        //Delete the message from messages
        //Call the server
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <AppScreen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/huy.jpg"),
                        },
                    ]);
                }}
            ></FlatList>
        </AppScreen>
    );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
