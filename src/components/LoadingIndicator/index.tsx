import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export function LoadingIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={32} color="#FFF" />
        </View>
    )
}