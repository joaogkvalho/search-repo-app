import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 24,

        alignItems: "center",
        justifyContent: "center",
    },

    formContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },

    description: {
        paddingHorizontal: 18,

        textAlign: "center",
        color: "#BFBFD4"
    },

    inputContainer: {
        width: "100%",
        height: 64,

        flexDirection: "row",
        alignItems: "center",

        marginTop: 18,
        paddingHorizontal: 24,

        fontSize: 16,

        backgroundColor: "#22222F",
        borderRadius: 8,
    },

    input: {
        flex: 1,
        color: "#FFF",
    }
})