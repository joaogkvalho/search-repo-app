import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { EmptyFavoriteRepos } from "../../components/EmptyFavoriteRepos";
import { FavoritedRepo } from "../../components/FavoritedRepo";
import { FavoritesHeader } from "../../components/FavoritesHeader";
import { storageFavoriteReposGet } from "../../storage/storageRepos";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setUserFavoriteRepos } from "../../store/user/actions";
import { styles } from "./styles";

export function Favorites() {
    const { userFavoriteRepos } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    async function handleGetUserFavoriteRepos() {
        const storageFavoriteRepos = await storageFavoriteReposGet()

        dispatch(setUserFavoriteRepos(storageFavoriteRepos))
    }

    useEffect(() => {
        handleGetUserFavoriteRepos()
    }, [userFavoriteRepos])

    return (
        <View style={styles.container}>
            <FavoritesHeader />

            <FlatList
                data={userFavoriteRepos}
                keyExtractor={(repo) => repo.id}
                renderItem={({ item }) => (
                    <FavoritedRepo
                        favoritedRepo={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <EmptyFavoriteRepos />
                )}
            />
        </View>
    )
}