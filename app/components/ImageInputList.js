import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

    //Vi ScrollView se tu dong fill het ko gian co the nen phai wrap scrollView trong mot View
    return (
        <View>
            <ScrollView
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                {/* Giup component can move horizontal */}
                <View style={styles.container}>
                    {/* render list imageUris dung map() */}
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                            {/* vi xoa image nen tham so la null, sau do truyen uri can xoa den component phia tren */}
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
                    {/* vi day la nut nhap image nen se truyen uri moi chon den component phia tren */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        marginRight: 10,
    },
});

export default ImageInputList;
