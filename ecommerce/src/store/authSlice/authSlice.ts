import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  firstName: string;
  email: string;
  token: string;
}

const initialState: initialStateType = {
  email: "",
  token: "",
  firstName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserDetails: (state: any, actions) => {
      let tempEmail = actions.payload.email;
      let tempToken = actions.payload.token;
      let tempName = actions.payload.firstName;
      state.email = tempEmail;
      state.token = tempToken;
      state.firstName = tempName;
    },
    logOutUser: (state: any, actions) => {
      state.token = actions.payload;
    },
  },
});

export const { addUserDetails, logOutUser } = authSlice.actions;

export default authSlice.reducer;
