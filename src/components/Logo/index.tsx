import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Logo() {
    return (
        <View style={styles.container}>
            <FontAwesome 
                name="code-fork" 
                size={42}
                color="#8FB2F5"
            />

            <Text style={styles.text}>
                <Text style={{ color: "#8FB2F5" }}>search</Text>_repo
            </Text>
        </View>
    )
}