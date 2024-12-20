import { NavigationContainer } from "@react-navigation/native";
import { Dimensions, StyleSheet, View } from "react-native";
import { AppRoutes } from "./app.routes";

const dimension = Dimensions.get("window")

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