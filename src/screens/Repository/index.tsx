import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { RepositoryHeader } from "../../components/RepositoryHeader";
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
            <RepositoryHeader />

            <Text style={styles.repoName}>
                {repo.name}
            </Text>

           <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
                {repo.description}
            </Text>
           </View>

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
                        <Text style={styles.statsNumber}>12-12-2024</Text>
                    </View>

                    <View style={styles.stats}>
                        <Text style={styles.statsText}>Atualizado em</Text>
                        <Text style={styles.statsNumber}>18-12-2024</Text>
                    </View>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.languageTitle}>Criado com</Text>
                    <Text style={styles.language}>
                        {repo.language.toLowerCase()}
                    </Text>
                </View>
            </View>

           <View style={styles.actionButtonsContainer}>
                <TouchableOpacity 
                    style={styles.githubButton} 
                    activeOpacity={0.8}
                >
                    <Feather name="github" size={24} color="7F7F98" />
                    <Text style={styles.githubButtonText}>
                        Navegar para o repositório
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.8}>
                    <Feather name="star" size={24} color="#FFF" />
                    <Text style={styles.favoriteButtonText}>
                        Marcar como favorito
                    </Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}