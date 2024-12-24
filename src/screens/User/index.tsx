import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { UserRepo } from "../../components/UserRepo";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setFilter } from "../../store/user/actions";
import { filterUserRepos, loadMoreRepos, searchUserRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function User() {
    const [page, setPage] = useState(2)

    const { 
        user, 
        userName,
        userRepos,
        loading, 
        filter 
    } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    function handleFilterReposList() {
        dispatch(filterUserRepos({ user, filter }))
    }

    function handleLoadMoreRepos() {
        if (loading) {
            return
        }

        dispatch(loadMoreRepos({ user,  page }))
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch(searchUserRepos(user.login))
    }, [userName])

    return (
        <View style={styles.container}>
            <FlatList
                data={userRepos}
                ListHeaderComponent={
                    <>
                        <Image src={user.avatar_url} style={styles.userAvatar} />

                        <Text style={styles.userName}>{user.login}</Text>
            
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
                    </>
                }
                ListHeaderComponentStyle={{
                    width: "100%",

                    paddingBottom: 24,

                    alignItems: "center",
                    justifyContent: "center",
                }}
                ListFooterComponent={() => (
                    <View>
                        {!loading && <LoadingIndicator />}
                    </View>
                )}
                keyExtractor={(repo) => repo.id}
                renderItem={({ item }) => (
                    <UserRepo userRepo={item} />
                )}
                onEndReached={handleLoadMoreRepos}
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",

                    marginTop: 18,
                    paddingHorizontal: 32
                }}
            />
        </View>
    )
}