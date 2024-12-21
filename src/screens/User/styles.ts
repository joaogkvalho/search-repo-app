import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 86,

        backgroundColor: "#13131A"
    },

    userAvatar: {
        width: 164,
        height: 164,

        borderRadius: 999
    },

    userName: {
        fontSize: 22,
        fontWeight: "bold",

        color: "#FFF"
    },

    statsContainer: {
        flexDirection: "row",
        gap: 20,

        marginTop: 14
    },

    stats: {
        alignItems: "center"
    },

    statsNumber: {
        fontSize: 18,
        fontWeight: "bold",

        color: "#FFF"
    },

    statsText: {
        fontSize: 14,

        color: "#BFBFD4"
    },

    repositoriesContainer: {
        width: "100%",

        marginBottom: 72,
        paddingVertical: 48,
        paddingHorizontal: 32,

        gap: 24
    }
})