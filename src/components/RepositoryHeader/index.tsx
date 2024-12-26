import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { styles } from "./styles";

interface RepositoryHeaderProps {
    isFavorited: boolean
}

export function RepositoryHeader({ isFavorited }: RepositoryHeaderProps) {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    
    function handleGoBack() {
        navigation.navigate("user")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack}>
                <Feather 
                    name="chevron-left" 
                    size={28} 
                    color="#FFF"
                />
            </TouchableOpacity>

            <View>
                <FontAwesome 
                    name={isFavorited ? "star" : "star-o"}
                    size={32} 
                    color="#8FB2F5" 
                />
           </View>
        </View>
    )
}