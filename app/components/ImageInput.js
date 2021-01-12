import React, { useEffect } from "react";
import {
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    View,
    Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({
    backgroundColor = colors.light,
    height = 120,
    iconColor = colors.medium,
    imageUri,
    onChangeImage,
    size = 45,
    width = 120,
}) {
    // componentDidMount
    // or useEffect hook

    //define an async function outside useEffect cause useEffect doesn't return a promise directly
    const requestPermission = async () => {
        // Cach 1: Dung Permissions co the hoi nhieu quyen truy cap
        /*const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION)
        if (!result.granted) {
            alert("You need to enable permission to access the library");
        }*/

        //Cach 2: Dung ImagePicker chi quan tam den mediaLibrary
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted) {
            alert("You need to enable permission to access the library");
        }
    };

    //just executed 1 one time, hoi quyen su dung 1 lan (nho ,[])
    useEffect(() => {
        requestPermission();
    }, []);
    // useEffect(callback, [arg]); useEffect se goi callback moi khi [arg] thay doi, nen neu t dat [] thi chi executed 1 lan

    // --- Xu li press vao container ---
    const handlePress = () => {
        if (!imageUri) selectImage();
        //Neu co imageUri thi chay function selectImage()
        //nguoc lai dua ra thong bao xoa
        else
            Alert.alert(
                "Delete",
                "Are you sure you want to delete this image?",
                [
                    { text: "Yes", onPress: () => onChangeImage(null) }, //truyen null vao onChangImage se setImageUri(null) => uri= null => Xoa
                    { text: "No" },
                ]
            );
    };

    //--- chon anh trong thu vien
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {
                onChangeImage(result.uri); //truyen imageUri vao onChangeImage
            }
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    //Neu co imageUri thi render image, nguoc lai render icon
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View
                style={[
                    styles.container,
                    {
                        width: width,
                        height: height,
                        backgroundColor: backgroundColor,
                    },
                ]}
            >
                {!imageUri && (
                    <MaterialCommunityIcons
                        name="camera"
                        size={size}
                        color={iconColor}
                    />
                )}
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "center",
        overflow: "hidden",
    },
    image: {
        height: "100%",
        width: "100%",
    },
});

export default ImageInput;
