import React from "react";
import { FlatList, View } from "react-native";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { RepositoryListHeader } from "../../components/RepositoryListHeader";
import { UserRepo } from "../../components/UserRepo";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setRepoListPage } from "../../store/user/actions";
import { loadMoreRepos } from "../../store/user/thunks";
import { styles } from "./styles";

export function User() {
    const { 
        user,
        userRepos,
        repoListPage,
        loading, 
    } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    const isRepoListFinished = userRepos.length !== user.public_repos

    function handleLoadMoreRepos() {
        if (isRepoListFinished) {
            console.log("RENDERIZOU A PAGINA --> ", repoListPage)
            console.log("ATUAL", userRepos.length)
            console.log("TOTAL", user.public_repos)

            dispatch(loadMoreRepos({ user, page: repoListPage }))
            dispatch(setRepoListPage(isRepoListFinished ? repoListPage + 1 : repoListPage))
        } else {
            return
        }
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={userRepos}
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