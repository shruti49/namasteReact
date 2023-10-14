import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import RestaurantMenu from "../src/components/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import appStore from "../utils/Redux/appStore";

//mocking fetch for res menu
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(
        MOCK_DATA?.cards[0]?.card?.card?.info,
        MOCK_DATA?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      );
    },
  });
});

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  // const accordianHeader = screen.getByText("Angithi Tawa Parantha (19)");
  // fireEvent.click(accordianHeader);

  // const itemList = screen.getAllByTestId("foodItems");

  // expect(itemList.length).toBe(19);
});
