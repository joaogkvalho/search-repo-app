import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",

        marginTop: 14,
        padding: 18,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#22222F",
        borderRadius: 8,
    },

    avatar: {
        width: 72,
        height: 72,

        borderRadius: 9999,
    },

    textContainer: {
        gap: 4,
        paddingLeft: 24,
    },

    userCompleteName: {
        fontSize: 18,
        fontWeight: "bold",

        color: "#7F7F98"
    },

    userName: {
        fontSize: 12,

        color: "#b3b3b3"
    }
})