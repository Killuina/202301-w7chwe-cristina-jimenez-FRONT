import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the name of the app: 'Feisbuk'", () => {
      render(<Header />);

      const header = screen.getByRole("heading", { name: "Feisbuk" });

      expect(header).toBeInTheDocument();
    });
  });
});
