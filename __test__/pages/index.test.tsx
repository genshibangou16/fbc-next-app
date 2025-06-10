import { render, screen } from "@testing-library/react";
import Home from "@/pages/";

describe("Home Page", () => {
  it("Testページへのリンクを持つ", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: "Go to Test Page" });
    expect(link).toBeInTheDocument();
  });
  it("Staticページへのリンクを持つ", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: "Go to Static Page" });
    expect(link).toBeInTheDocument();
  });
  it("Forecastページへのリンクを持つ", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: "Go to Forecast Page" });
    expect(link).toBeInTheDocument();
  });
});
