import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { AppRoutes } from "./app.routes";

export function Routes() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#13131A"
    }
})