import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { Alert, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RepositoryHeader } from "../../components/RepositoryHeader";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { storageFavoriteReposSave } from "../../storage/storageRepos";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { FavoriteRepo, Repo } from "../../store/user/interfaces/IUser";
import { styles } from "./styles";

type RouteParamsProps = {
    repo: Repo
}

export function Repository() {
    const route = useRoute()
    const { repo } = route.params as RouteParamsProps

    const { userFavoriteRepos } = useAppSelector((store) => store.user)
    const { userName } = useAppSelector((store) => store.user)

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    const favoritedRepo = userFavoriteRepos.find((favoriteRepo) => {
        return favoriteRepo.id === repo.id
    })

    const isRepoFavorited = !!favoritedRepo

    function handleNavigateToRepoPage() {
        Linking.openURL(`https://github.com/${userName}/${repo.name}`)
    }

    async function setRepoAsFavorite(favoriteRepo: FavoriteRepo) {
        await storageFavoriteReposSave([...userFavoriteRepos, favoriteRepo])

        navigation.navigate("favorites")
    }

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

        if (!isRepoFavorited) {
            Alert.alert(
                'Favoritar',
                'Deseja marcar este repositório como favorito?',
                [
                    { text: 'Não', style: 'cancel' },
                    {
                        text: 'Sim', 
                        onPress: () => setRepoAsFavorite(favoriteRepo)
                    }
                ]
            )
        } else {
            Alert.alert("Este repositório já está na lista de favoritos.")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <RepositoryHeader isFavorited={isRepoFavorited} />

            <Text style={styles.repoName}>
                {repo.name}
            </Text>

            {repo.description && (
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                       {repo.description}
                    </Text>
                </View>
            )}

            <View style={styles.repoInfo}>
                <View style={styles.statsContainer}>
                    <View style={styles.stats}>
                        <Text style={styles.statsText}>Forks</Text>
                        <Text style={styles.statsNumber}>{repo.forks_count}</Text>
                    </View>

                    <View style={styles.stats}>
                        <Text style={styles.statsText}>Stars</Text>
                        <Text style={styles.statsNumber}>{repo.stargazers_count}</Text>
                    </View>
                </View>
                
                <View style={styles.dateInfoContainer}>
                    <View style={styles.stats}>
                        <Text style={styles.statsText}>Criado em</Text>
                        <Text style={styles.statsNumber}>
                            {format(repo.created_at, "dd-MM-yyyy")}
                        </Text>
                    </View>

                    <View style={styles.stats}>
                        <Text style={styles.statsText}>Atualizado em</Text>
                        <Text style={styles.statsNumber}>
                            {format(repo.updated_at, "dd-MM-yyyy")}
                        </Text>
                    </View>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.languageTitle}>Criado com</Text>
                    <Text style={styles.language}>
                        {repo.language ? repo.language.toLowerCase() : (
                            <Text style={{ fontSize: 16 }}>
                                Sem linguagem definida
                            </Text>
                        )}
                    </Text>
                </View>
            </View>

           <View style={styles.actionButtonsContainer}>
                <TouchableOpacity 
                    style={styles.githubButton} 
                    activeOpacity={0.8}
                    onPress={handleNavigateToRepoPage}
                >
                    <Feather name="github" size={24} color="7F7F98" />
                    <Text style={styles.githubButtonText}>
                        Navegar para o repositório
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSetRepoAsFavorite}
                    style={styles.favoriteButton} 
                    activeOpacity={0.8}
                >
                    <Feather name="star" size={24} color="#FFF" />
                    <Text style={styles.favoriteButtonText}>
                        Marcar como favorito
                    </Text>
                </TouchableOpacity>
           </View>
        </ScrollView>
    )
}