import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Wrapper from "../../mocks/Wrapper";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { store } from "../../store/store";
import { UserCredentials } from "../types";
import useUser from "./useUser";

const mockDispatch = jest.spyOn(store, "dispatch");

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given the useUser custom hook", () => {
  describe("When loginUser function is called", () => {
    test("Then it should call the dispatch with loginUser action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });
      const userCredentials: UserCredentials = {
        username: "Manolo",
        password: "manolo1",
      };
      const user: User = {
        username: "Manolo",
        token: "mocken",
      };

      const loginUsersAction = loginUserActionCreator(user);

      await act(async () => loginUser(userCredentials));

      expect(mockDispatch).toHaveBeenCalledWith(loginUsersAction);
    });
  });
});
