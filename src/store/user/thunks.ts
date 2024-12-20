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