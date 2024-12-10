import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for concact page", () => {
  test("Contact should be loaded in Page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Contact should be have button inside", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Contact should be have 2 input box inside", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
  });
});
