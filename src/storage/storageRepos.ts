import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoriteRepo } from "../store/user/interfaces/IUser";
import { USER_FAVORITE_REPOS_STORAGE, USER_REPO_IS_FAVORITED } from "./storageConfig";

// Favorite User Repos
export async function storageFavoriteReposSave(favoriteRepos: FavoriteRepo[]) {
    await AsyncStorage.setItem(USER_FAVORITE_REPOS_STORAGE, JSON.stringify(favoriteRepos))
}

export async function storageFavoriteReposGet() {
    const storage = await AsyncStorage.getItem(USER_FAVORITE_REPOS_STORAGE)

    const repos: FavoriteRepo[] = storage ? JSON.parse(storage) : []

    return repos
}

export async function storageFavoriteReposRemove() {
    await AsyncStorage.removeItem(USER_FAVORITE_REPOS_STORAGE)
}

// Favorite Boolean Value
export async function storageIsFavoriteValueSave(isFavorited: boolean) {
    await AsyncStorage.setItem(USER_REPO_IS_FAVORITED, JSON.stringify(isFavorited))
}

export async function storageIsFavoriteValueGet() {
    const storage = await AsyncStorage.getItem(USER_REPO_IS_FAVORITED)

    const isFavorited: boolean = storage ? JSON.parse(storage) : null

    return isFavorited
}