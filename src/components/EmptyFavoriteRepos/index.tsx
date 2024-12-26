import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyFavoriteRepos() {
    return (
        <View style={styles.container}>
            <Feather 
                name="x-circle" 
                size={156}
                color="#fff" 
                style={{ width: 156 }}
            />

            <View style={{ gap: 6 }}>
                <Text style={styles.emptyFavoriteRepoText}>
                    Nenhum repositório favorito encontrado.
                </Text>
                <Text style={styles.emptyFavoriteRepoDescription}>
                    Você pode marcar um repositório como favorito
                    na página do próprio repositório.
                </Text>
            </View>
        </View>
    )
}