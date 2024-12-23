import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchUserRequest = createAsyncThunk(
    "search/user",
    async (userName: string) => {
        const response = await fetch(`https://api.github.com/users/${userName}`)

        if (response.ok) {
            const data = response.json()
            
            return data
        }
    }
)

export const searchUserRepos = createAsyncThunk(
    "search/repos",
    async (userName: string) => {
        const response = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated`)

        if (response.ok) {
            const data = response.json()

            return data
        }
    }
)

export const filterUserRepos = createAsyncThunk(
    "filter/repos",
    async (filter: string) => {
        const response = await fetch(`https://api.github.com/search/repositories?q=user:joaogkvalho+language:${filter}`)

        if (response.ok) {
            const data = response.json()

            return data
        }
    }
)