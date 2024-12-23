import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setUserFavoriteRepos } from "../../store/user/actions";
import { Repo } from "../../store/user/interfaces/IUser";
import { styles } from "./styles";

interface RepositoryHeaderProps {
    repo: Repo
}

export function RepositoryHeader({ repo }: RepositoryHeaderProps) {
    const { userFavoriteRepos } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    function handleSetRepoAsFavorite() {
        const favoriteRepo = {
            id: repo.id,
            name: repo.name,
            owner: {
                login: repo.owner.login,
                avatar_url: repo.owner.avatar_url
            },
            description: repo.description,
            language: repo.language
        }

        dispatch(setUserFavoriteRepos([...userFavoriteRepos, favoriteRepo]))
    }

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

            <TouchableOpacity onPress={handleSetRepoAsFavorite}>
                <FontAwesome 
                    name="star-o"
                    size={32} 
                    color="#8FB2F5" 
                />
           </TouchableOpacity>
        </View>
    )
}