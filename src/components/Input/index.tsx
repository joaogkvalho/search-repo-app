import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

export function Input() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar usuário"
                placeholderTextColor="#7F7F98"
            />

            <Feather 
                name="search" 
                size={24}
                color="#7F7F98"
                style={{ width: 24 }} 
            />
        </View>
    )
}