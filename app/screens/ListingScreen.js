import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/buttons/AppButton";
import AppScreen from "../components/AppScreen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
    const { data, error, loading, request } = useApi(listingsApi.getListings);

    useEffect(() => {
        request();
    }, []);

    return (
        <AppScreen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve the listing.</AppText>
                    <AppButton title="Retry" onPress={request} />
                </>
            )}

            <ActivityIndicator visible={loading} />

            <FlatList
                data={data}
                keyExtractor={(card) => card.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() =>
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }
                        thumbnailUrl={item.images[0].thumbnailUrl}
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
