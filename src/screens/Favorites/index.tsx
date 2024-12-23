import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { EmptyFavoriteRepos } from "../../components/EmptyFavoriteRepos";
import { FavoritedRepo } from "../../components/FavoritedRepo";
import { storageFavoriteReposGet } from "../../storage/storageRepos";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setUserFavoriteRepos } from "../../store/user/actions";
import { styles } from "./styles";

export function Favorites() {
    const { userFavoriteRepos, loading } = useAppSelector((store) => store.user)
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
            <Text style={styles.pageTitle}>
                Repositórios favoritados
            </Text>

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
                style={{
                    marginTop: 40,
                }}
            />
        </View>
    )
}