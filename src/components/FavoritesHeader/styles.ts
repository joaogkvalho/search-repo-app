import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",

        paddingVertical: 32,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    clearText: {
        fontSize: 16,
        fontWeight: "bold",

        color: "#FFF"
    },

    
    clearTextDisabled: {
        fontSize: 16,
        fontWeight: "bold",

        color: "#FFF",
        opacity: 0.3
    }
})