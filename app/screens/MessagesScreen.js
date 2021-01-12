import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import AppScreen from "../components/AppScreen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
    {
        id: 1,
        title:
            'You are probably importing something from "file A" into "file B", then importing something again from "file B" into "file A" . Examine all the imports from both the files and see if there\'s any such cycle.',
        description:
            "I created a comp.js file where I could import the components as they are created and export them as modules. All components are then able to be reached from one place. So you can then have something like this in some place... ",
        image: require("../assets/huy.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/huy.jpg"),
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
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
                        {
                            id: 3,
                            title: "T3",
                            description: "D3",
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
