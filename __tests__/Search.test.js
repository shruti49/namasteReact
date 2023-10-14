import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//mocking fetch function because we can't access the api, jsdom can't do a network call
//faking an api call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search resList for burger text input in body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //get me all the elements with res card
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  //simulating event just like in browser
  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  //screen should load 1res card
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("should filter Top Rated Restaurants in body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //get me all the elements with res card
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  //screen should load 1res card
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(15);
});
