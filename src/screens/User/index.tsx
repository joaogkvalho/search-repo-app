import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { RepositoryListHeader } from "../../components/RepositoryListHeader";
import { UserRepo } from "../../components/UserRepo";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { resetUser, setRepoListPage } from "../../store/user/actions";
import { searchUserRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function User() {
    const { 
        user,
        userRepos,
        repoListPage,
        loading, 
    } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    const isRepoListFinished = userRepos.userRepos.length !== user.public_repos
    const isFocused = useIsFocused()

    function handleLoadMoreRepos() {
        if (loading) {
            return
        }

        if (user.login && isRepoListFinished) {
            dispatch(searchUserRepos({ user, page: repoListPage }))
            dispatch(setRepoListPage(repoListPage + 1))
        } else {
            return
        }
    }

    useEffect(() => {
        const thereIsOldUserData = !!userRepos.userName && user.login !== userRepos.userName

        if (thereIsOldUserData && isFocused) {
            dispatch(resetUser())
        }
    }, [isFocused])
    
    return (
        <View style={styles.container}>
            <FlatList
                data={userRepos.userRepos}
                renderItem={({ item }) => (
                    <UserRepo userRepo={item} />
                )}
                ListHeaderComponent={<RepositoryListHeader />}
                ListFooterComponent={() => loading && <LoadingIndicator />}
                onEndReached={handleLoadMoreRepos}
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",

                    gap: 18,
                    paddingHorizontal: 32
                }}
            />
        </View>
    )
}