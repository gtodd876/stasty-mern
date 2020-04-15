import React from "react";
import { render } from "@testing-library/react";

import UserList from "./UserList";

test("<UserList> should render a list of users", () => {
  const USERS = [
    {
      id: "1",
      name: "stacy",
      image: "",
      recipeCount: 3,
    },
    {
      id: "2",
      name: "todd",
      image: "",
      recipeCount: 2,
    },
  ];

  const { debug, getAllByAltText } = render(<UserList items={USERS} />);
  expect(getAllByAltText(/user avatar/i).length).toBe(2);
  debug();
});
