import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { RepositoryListHeader } from "../../components/RepositoryListHeader";
import { UserRepo } from "../../components/UserRepo";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { loadMoreRepos, searchUserRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function User() {
    const [page, setPage] = useState(2)

    const { 
        user, 
        userName,
        userRepos,
        loading, 
    } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

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
                ListHeaderComponent={<RepositoryListHeader />}
                ListFooterComponent={() => !loading && <LoadingIndicator />}
                keyExtractor={(repo) => repo.id}
                renderItem={({ item }) => (
                    <UserRepo userRepo={item} />
                )}
                onEndReached={handleLoadMoreRepos}
                onEndReachedThreshold={3}
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