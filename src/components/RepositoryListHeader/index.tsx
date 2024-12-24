import { Feather } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setFilter } from "../../store/user/actions";
import { filterUserRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function RepositoryListHeader() {
    const { 
        user,  
        filter 
    } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    function handleFilterReposList() {
        dispatch(filterUserRepos({ user, filter }))
    }

    return (
        <View style={styles.container}>
            <Image src={user.avatar_url} style={styles.userAvatar} />

<           Text style={styles.userName}>{user.login}</Text>

            <View style={styles.statsContainer}>
                <View style={styles.stats}>
                    <Text style={styles.statsNumber}>
                        {user.followers?.toLocaleString()}
                    </Text>
                    <Text style={styles.statsText}>
                        Seguidores
                    </Text>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.statsNumber}>
                        {user.following}
                    </Text>
                    <Text style={styles.statsText}>
                        Seguindo
                    </Text>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.statsNumber}>
                        {user.public_repos}
                    </Text>
                    <Text style={styles.statsText}>
                        Repositórios
                    </Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={filter}
                    placeholder="Filtre por descrição ou linguagem"
                    placeholderTextColor="#7F7F98"
                    onChangeText={(filter) => dispatch(setFilter(filter))}
                />

                <TouchableOpacity onPress={handleFilterReposList}>
                    <Feather
                        name="filter" 
                        size={24}
                        color="#7F7F98"
                        style={{ width: 24 }} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}