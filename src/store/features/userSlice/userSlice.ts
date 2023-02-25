import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      username: action.payload.username,
      isLogged: true,
    }),

    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
