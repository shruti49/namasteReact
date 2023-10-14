import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../src/components/Header";
import appStore from "../utils/Redux/appStore";

describe("Header Component Test Cases", () => {
  beforeAll(() => console.log("Before All"));

  beforeEach(() => console.log("Before Each"));

  it("should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //assertion
    const button = screen.getByRole("button", { name: "Login" }); //good way to test
    //const loginBtn = screen.getByText('Login');
    expect(button).toBeInTheDocument();
  });

  it("should render header component with 0 Cart Items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //assertion
    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should render header component with a Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //assertion
    const cartItem = screen.getByText(/Cart/); //regex
    expect(cartItem).toBeInTheDocument();
  });

  it("should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //assertion
    const loginBtn = screen.getByRole("button", { name: "Login" }); //good way to test
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });

  afterAll(() => console.log("After All"));
  
  afterEach(() => console.log("After Each"));
});
