import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Login from "./Login";

describe("Given the Login component", () => {
  describe("When it renders", () => {
    test("Then it should show a button with test 'Log in'", () => {
      render(<Login />);

      const loginButton = screen.getByRole("button", { name: "Log in" });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When the user writes on Username's input field", () => {
    test("then it should change the value of username's input", async () => {
      const usernameLabel = "Username:";
      const expectedInputValue = "manolo";
      render(<Login />);

      const usernameInput = screen.getByRole("textbox", {
        name: usernameLabel,
      });

      await act(
        async () => await userEvent.type(usernameInput, expectedInputValue)
      );

      expect(usernameInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user writes on Password's input field", () => {
    test("then it should change the value of password's input", async () => {
      const passwordLabel = "Password:";
      const expectedInputValue = "manolo1234";
      render(<Login />);

      const usernameInput = screen.getByLabelText(passwordLabel);

      await act(
        async () => await userEvent.type(usernameInput, expectedInputValue)
      );

      expect(usernameInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user clicks login button", () => {
    test("then it should reset the value of username's input field", async () => {
      const usernameLabel = "Username:";
      const expectedInputValue = "";
      render(<Login />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const loginButton = screen.getByRole("button", { name: "Log in" });

      await act(async () => await userEvent.click(loginButton));

      expect(usernameInput).toHaveValue(expectedInputValue);
    });

    test("then it should reset the value of password's input field", async () => {
      const passwordLabel = "Password:";
      const expectedInputValue = "";
      render(<Login />);

      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginButton = screen.getByRole("button", { name: "Log in" });

      await act(async () => await userEvent.click(loginButton));

      expect(passwordInput).toHaveValue(expectedInputValue);
    });
  });
});
