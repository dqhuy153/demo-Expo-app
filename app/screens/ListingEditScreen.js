import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { ScrollView, StyleSheet } from "react-native";

import Screen from "../components/AppScreen";
import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as FormPicker,
    SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(0).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "#f0932b", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "#eb4d4b", icon: "" },
    { label: "Camera", value: 3, backgroundColor: "#6ab04c", icon: "lock" },
    { label: "Games", value: 4, backgroundColor: "#95afc0", icon: "lock" },
    { label: "Cars", value: 5, backgroundColor: "#7ed6df", icon: "lock" },
    { label: "Sports", value: 6, backgroundColor: "#30336b", icon: "lock" },
    {
        label: "Movies & Music",
        value: 7,
        backgroundColor: "#4834d4",
        icon: "lock",
    },
    { label: "Books", value: 8, backgroundColor: "#22a6b3", icon: "lock" },
    { label: "Others", value: 9, backgroundColor: "#535c68", icon: "lock" },
];

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    //Handle submit button
    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0); //reset progress
        setUploadVisible(true); //show upload modal
        const result = await listingApi.addListing(
            { ...listing, location }, //pass listing to api
            (progress) => setProgress(progress) //take progress from upload form
        );

        if (!result.ok) {
            setUploadVisible(false);
            return alert("Coul not save the listing.");
        }

        resetForm();
    };

    return (
        <Screen style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator
                alwaysBounceVertical
                keyboardDismissMode="interactive"
            >
                <UploadScreen
                    onDone={() => setUploadVisible(false)}
                    visible={uploadVisible}
                    progress={progress}
                />
                <Form
                    initialValues={{
                        title: "",
                        price: "",
                        category: null,
                        description: "",
                        images: [],
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <FormImagePicker name="images" />
                    <FormField
                        maxLength={255}
                        name="title"
                        placeholder="Title"
                    />
                    <FormField
                        keyboardType="numeric"
                        maxLength={8} //10000,99
                        name="price"
                        placeholder="Price"
                        width={120}
                    />
                    <FormPicker
                        items={categories}
                        name="category"
                        numberOfColumns={3}
                        PickerItemComponent={CategoryPickerItem}
                        placeholder="Category"
                        width="50%"
                    />
                    <FormField
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
                    <SubmitButton title="post" />
                </Form>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingBottom: 50,
    },
});

export default ListingEditScreen;
