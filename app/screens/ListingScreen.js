import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";
import Card from "../components/Card";
import colors from "../config/colors";

function ListingScreen(props) {
    const cardItems = [
        {
            id: 1,
            title: "Red jacket for sale",
            price: "100",
            image: require("../assets/jacket.jpg"),
        },
        {
            id: 2,
            title: "Couch in great condition",
            price: "1000",
            image: require("../assets/couch.jpg"),
        },
        {
            id: 3,
            title: "A chair all of you need but me",
            price: "30",
            image: require("../assets/chair.jpg"),
        },
    ];

    return (
        <AppScreen style={styles.screen}>
            <FlatList
                data={cardItems}
                keyExtractor={(card) => card.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                )}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingScreen;
