import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./interfaces/IUser";

export const searchUserRequest = createAsyncThunk(
    "search/user",
    async (userName: string, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${userName}`)
            
            return data
        } catch (error: any) {
            if (error.response?.status === 403) {
                return rejectWithValue("Limite máximo de requisições atingido.")
            } else {
                return rejectWithValue("Usuário digitado inválido.")
            }
        }
    }
)

export const initialSearchUserRepos = createAsyncThunk(
    "initialSearch/repos",
    async (user: User) => {
        const response = await fetch(`https://api.github.com/users/${user.login}/repos?per_page=8`)

        if (response.ok) {
            const data = response.json()

            return data
        }
    }
)

export const searchUserRepos = createAsyncThunk(
    "search/repos",
    async (loadMoreObject: { page: number, user: User }) => {
        const { page, user } = loadMoreObject

        const response = await fetch(`https://api.github.com/users/${user.login}/repos?per_page=8&page=${page}`)

        if (response.ok) {
            const data = response.json()

            return data
        }
    }
)

export const filterUserRepos = createAsyncThunk(
    "filter/repos",
    async (filteringObject: { user: User, filter: string }) => {
        const { user, filter } = filteringObject

        const response = await fetch(`https://api.github.com/search/repositories?q=user:${user.login}+${filter} in:language in:description`)

        if (response.ok) {
            const data = response.json()

            return data
        }
    }
)