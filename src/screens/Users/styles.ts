import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 24,

        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },

    description: {
        paddingHorizontal: 18,

        textAlign: "center",
        color: "#BFBFD4"
    }
})