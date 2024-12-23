import { FlatList, Text, View } from "react-native";
import { EmptyFavoriteRepos } from "../../components/EmptyFavoriteRepos";
import { FavoritedRepo } from "../../components/FavoritedRepo";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { styles } from "./styles";

export function Favorites() {
    const { userFavoriteRepos } = useAppSelector((store) => store.user)

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