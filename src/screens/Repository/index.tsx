import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Repo } from "../../store/user/interfaces/IUser";
import { styles } from "./styles";

type RouteParamsProps = {
    repo: Repo
}

export function Repository() {
    const route = useRoute()
    
    const { repo } = route.params as RouteParamsProps

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{repo.name}</Text>

            <Text style={{ color: "#fff" }}>{repo.description}</Text>
        </View>
    )
}