import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: 36,
        paddingTop: 56,

        backgroundColor: "#13131A"
    },

    repoName: {
        marginTop: 32,

        fontSize: 20,
        fontWeight: "bold",

        color: "#FFF",
    },

    descriptionContainer: {
        paddingTop: 24
    },

    descriptionText: {
        fontSize: 14,

        color: "#7F7F98"
    },

    repoInfo: {
        width: "100%",

        gap: 24
    },

    statsContainer: {
        flexDirection: "row",
        gap: 20,

        marginTop: 36
    },

    stats: {
        gap: 6
    },

    statsNumber: {
        fontSize: 16,
        fontWeight: "bold",

        color: "#FFF"
    },

    statsText: {
        fontSize: 12,

        color: "#BFBFD4"
    },

    languageTitle: {
        fontSize: 12,

        color: "#BFBFD4"
    },

    language: {
        fontSize: 20,
        fontWeight: "bold",

        color: "#FFF",
    },

    dateInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 18
    },

    actionButtonsContainer: {
        width: "100%",
        alignItems: "center",

        marginTop: 64,
        marginBottom: 76,
        gap: 14
    },

    githubButton: {
        width: "100%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,

        padding: 24,

        backgroundColor: "#BFBFD4",
        borderRadius: 8
    },

    githubButtonText: {
        fontWeight: "bold",

        color: "7F7F98",
    },

    favoriteButton: {
        width: "100%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,

        padding: 24,

        backgroundColor: "#8FB2F5",
        borderRadius: 8
    },
    
    favoriteButtonText: {
        fontWeight: "bold",

        color: "#FFF",
    },
})