import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accountID: "",
        email: "",
        role: "",
    },

    reducers: {
        initializeAccount: (state,action) => {
            state.accountID = action.payload.accountID
            state.email = action.payload.email
            state.role = action.payload.role
            state.name = action.payload.name
        }
    }
})

export const { initializeAccount } = authSlice.actions
export default authSlice.reducer