import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

import AboutClass from "./src/components/AboutClass";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";

const Grocery = lazy(() =>
  import("./src/components/GroceryShopping/GroceryApp")
);

import UserContext from "./src/context/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Shruti Shastri");
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Lord Krishna" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
