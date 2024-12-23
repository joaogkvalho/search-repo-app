import { TouchableOpacity } from "react-native";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setUserFavoriteRepos } from "../../store/user/actions";
import { FavoriteRepo } from "../../store/user/interfaces/IUser";
import { styles } from "./styles";

interface FavoritedRepoProps {
    favoritedRepo: FavoriteRepo
}

export function FavoritedRepo({ favoritedRepo }: FavoritedRepoProps) {
    const { userFavoriteRepos } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    function handleToogleFavoriteRepo() {
       const favoritedListWithoutDeleteRepo = userFavoriteRepos.filter((repo) => {
            return repo.id != favoritedRepo.id
       })

       dispatch(setUserFavoriteRepos(favoritedListWithoutDeleteRepo))
    }

    console.log(userFavoriteRepos)

    return (
        <TouchableOpacity
            onPress={handleToogleFavoriteRepo}
            style={styles.favoritedRepo} 
            activeOpacity={0.7}
        >
            {/* {favoritedRepo.id && (
                <View>
                    <View style={styles.header}>
                        <Image 
                            src={favoritedRepo.owner.avatar_url} 
                            style={styles.userAvatar} 
                        />

                        <FontAwesome 
                            name="star" 
                            size={26}
                            color="#8FB2F5" 
                            style={{ width: 26 }}
                        />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.repoName}>
                            {favoritedRepo.name}
                        </Text>

                        <Text numberOfLines={3} style={styles.repoDescription}>
                            {favoritedRepo.description}
                        </Text>
                    </View>
                </View>
            )} */}
        </TouchableOpacity>
    )
}