import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

//it / test are same . alias of test keyword
//describe under describe will work
describe("Contact Us Page Test Cases", () => {
  it("Should load Contact component", () => {
    //rendering component in JSDOM
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  // it("Should load button in Contact component", () => {
  //   render(<Contact />);

  //   const button = screen.getByText("Submit");
  //   expect(button).toBeInTheDocument();
  // });

//   it("Should load input inside Contact component", () => {
//     render(<Contact />);

//     const input = screen.getByPlaceholderText("name");
//     expect(input).toBeInTheDocument();
//   });

//   it("Should load all inputboxes inside Contact component", () => {
//     render(<Contact />);

//     //returns a jsx element/dom node/react element
//     const inputBoxes = screen.getAllByRole("textbox");
//     expect(inputBoxes).toBeInTheDocument();
//     expect(inputBoxes.length).not.toBe(3);
//   });
 });
