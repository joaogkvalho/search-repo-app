import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { UserRepo } from "../../components/UserRepo";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { searchUserRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function User() {
    const { user, userName, userRepos } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

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

            <View style={styles.repositoriesContainer}>
                {userRepos?.map((repo) => (
                    <UserRepo userRepo={repo} key={repo.name} />
                ))}
            </View>
        </ScrollView>
    )
}