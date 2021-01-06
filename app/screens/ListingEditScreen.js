import React from "react";
import * as Yup from "yup";

import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().required().moreThan(0).label("Price"),
    description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
    return (
        <AppScreen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    category: "",
                    description: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField name="title" placeholder="Title" />
                <AppFormField name="price" placeholder="Price" />
                <AppPicker placeholder="Category" items />
                <AppFormField name="description" placeholder="Description" />
                <SubmitButton title="post" />
            </AppForm>
        </AppScreen>
    );
}

export default ListingEditScreen;
