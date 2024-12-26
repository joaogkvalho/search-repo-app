import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    favoritedRepo: {
        gap: 24,

        marginBottom: 24,
        paddingVertical: 24,
        paddingHorizontal: 32,

        backgroundColor: "#22222F",
        borderRadius: 8
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    userAvatar: {
        width: 72,
        height: 72,

        borderRadius: 999,
    },

    textContainer: {
        gap: 4,
    },

    repoName: {
        fontSize: 16,
        fontWeight: "bold",

        color: "#FFF"
    },

    repoDescription: {
        fontSize: 12,
        overflow: "hidden",

        color: "#BFBFD4",
    }
})