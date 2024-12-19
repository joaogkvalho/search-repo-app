import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: 186,

        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    text: {
        fontSize: 24,
        fontWeight: "bold",

        color: "#FFF"
    }
})