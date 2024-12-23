import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { UserRepo } from "../../components/UserRepo";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setFilter } from "../../store/user/actions";
import { filterUserRepos, searchUserRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function User() {
    const { 
        user, 
        userName, 
        userRepos,
        loading, 
        filter 
    } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    function handleFilterReposList() {
        dispatch(filterUserRepos(filter))
    }

    useEffect(() => {
        dispatch(searchUserRepos(userName))
    }, [userName])

    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={{
                alignItems: "center",
                gap: 8
            }}
        >
            <Image src={user.avatar_url} style={styles.userAvatar} />

            <Text style={styles.userName}>{user.login}</Text>

            <View style={styles.statsContainer}>
                <View style={styles.stats}>
                    <Text style={styles.statsNumber}>
                        {user.followers.toLocaleString()}
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

            <View style={{ paddingHorizontal: 32 }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Filtre por nome ou linguagem"
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

            {loading && (
                <LoadingIndicator />
            )}
            
            <View style={styles.repositoriesContainer}>
                {userRepos?.map((repo) => (
                    <UserRepo key={repo.name} userRepo={repo} />
                ))}
            </View>
        </ScrollView>
    )
}