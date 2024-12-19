import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: dimensions.width,
        height: "100%",

        padding: 24,

        alignItems: "center",
        justifyContent: "center",
        gap: 12,

        backgroundColor: "#13131A"
    },

    description: {
        paddingHorizontal: 18,

        textAlign: "center",
        color: "#BFBFD4"
    }
})