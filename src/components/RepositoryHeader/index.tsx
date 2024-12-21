import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { styles } from "./styles";

export function RepositoryHeader() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.navigate("user")
    }

    return (
        <View style={styles.container}>
            <View />

            <TouchableOpacity onPress={handleGoBack}>
                <Feather 
                    name="chevron-left" 
                    size={28} 
                    color="#FFF"
                />
            </TouchableOpacity>
        </View>
    )
}