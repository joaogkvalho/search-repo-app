import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { storageFavoriteReposRemove } from "../../storage/storageRepos";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { styles } from "./styles";

export function FavoritesHeader() {
    const { userFavoriteRepos, user } = useAppSelector((store) => store.user)

    const isFavoriteListEmpty = userFavoriteRepos.length === 0
    const theresNoUserData = user.login === ""

    const navigation = useNavigation<AppNavigatorRoutesProps>()
    
    function handleGoBack() {
        navigation.navigate("user")
    }

    async function clearFavoritesRepos() {
        await storageFavoriteReposRemove()
    }

    function handleClearFavoritesRepos() {
        Alert.alert(
            'Limpar',
            'Deseja limpar lista de repositórios favoritos?',
            [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim', 
                    onPress: () => clearFavoritesRepos()
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={isFavoriteListEmpty || theresNoUserData}
                onPress={handleGoBack}
            >
                <Feather 
                    name="chevron-left" 
                    size={28} 
                    color="#FFF"
                />
            </TouchableOpacity>

            <TouchableOpacity
                disabled={isFavoriteListEmpty}
                onPress={handleClearFavoritesRepos}
            >
                <Text 
                    style={
                        isFavoriteListEmpty 
                            ? styles.clearTextDisabled 
                            : styles.clearText
                    }
                >
                    Limpar
                </Text>
           </TouchableOpacity>
        </View>
    )
}