import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Given the Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the Header component with the app title: 'Feisbuk'", () => {
      render(<Layout />, { wrapper: BrowserRouter });

      const layoutHeader = screen.getByRole("heading", {
        name: "Feisbuk",
      });

      expect(layoutHeader).toBeInTheDocument();
    });

    test("Then it should show the main content of the app", () => {
      render(<Layout />);

      const mainContent = screen.getByRole("main");

      expect(mainContent).toBeInTheDocument();
    });
  });
});
