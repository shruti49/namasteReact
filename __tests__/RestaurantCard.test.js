import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard from "../src/components/RestaurantCard";

it("should render Restaurant Card with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);
  //assertion
  const resName = screen.getByText("KFC"); 
  expect(resName).toBeInTheDocument();
  
});

