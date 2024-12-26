import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
         width: "100%",

        paddingBottom: 24,

        alignItems: "center",
        justifyContent: "center",
        gap: 8
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
    },
})