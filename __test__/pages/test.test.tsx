import { render, screen } from "@testing-library/react";
import TestPage from "@/pages/test";

describe("Test Page", () => {
  it("renders the Test page with image and link", () => {
    render(<TestPage />);

    // Check if the image is rendered
    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();

    // Check if the link is rendered
    const link = screen.getByRole("link", { name: "Go back to Home" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
