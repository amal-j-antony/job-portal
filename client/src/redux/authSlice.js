import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userID: "",
        email: "",
        role: "",
    },

    reducers: {
        initializeAccount: (state,action) => {
            state.userID = action.payload.userID
            state.email = action.payload.email
            state.role = action.payload.role
        }
    }
})

export const initializeAccount = authSlice.actions
export default authSlice.reducer