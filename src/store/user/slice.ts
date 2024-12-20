import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitalState } from "./initialState";
import { searchUserRequest } from "./thunks";

export const userSlice = createSlice({
    name: "user",
    initialState: userInitalState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchUserRequest.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(searchUserRequest.rejected, () => {
                alert("ERRO NA REQUISÇÃO")
            })
    },
})