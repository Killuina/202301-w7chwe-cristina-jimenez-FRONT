import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a user reducer", () => {
  const initialState: UserState = {
    username: "",
    isLogged: false,
    token: "",
  };

  describe("When it receives a user with username 'Diana', token 'mocken' and an action to log in the user", () => {
    test("Then it should return the user with its isLogged property set as true", () => {
      const user: User = {
        username: "notDiana",
        token: "mocken",
      };
      const expectedUserState: UserState = {
        username: "notDiana",
        token: "mocken",
        isLogged: true,
      };
      const loginUserAction = loginUserActionCreator(user);

      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives a user with username 'Diana', token 'mocken' and an action to log out the user", () => {
    test("Then it should return the user's initial state", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
