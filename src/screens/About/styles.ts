import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        paddingHorizontal: 32,
        paddingTop: 72,

        backgroundColor: "#13131A"
    },

    content: {
        width: "100%",

        paddingTop: 56
    },

    creatorInfo: {
        alignItems: "center",
        gap: 24,

        marginTop: 56
    },

    profileImg: {
        width: 172,
        height: 172,

        borderRadius: 999
    },

    descriptionText: {
        fontSize: 14,

        color: "#7F7F98"
    },

    nameTitle: {
        fontSize: 20,
        fontWeight: "bold",

        color: "#FFF",
    },

    actionButtonsContainer: {
        width: "100%",
        alignItems: "center",

        marginTop: 64,
        gap: 14
    },

    githubButton: {
        width: "100%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,

        padding: 18,

        backgroundColor: "#BFBFD4",
        borderRadius: 8
    },

    githubButtonText: {
        fontWeight: "bold",

        color: "7F7F98",
    },

    linkedinButton: {
        width: "100%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,

        padding: 18,

        backgroundColor: "#0077B5",
        borderRadius: 8
    },
    
    linkedinButtonText: {
        fontWeight: "bold",

        color: "#FFF",
    },
})