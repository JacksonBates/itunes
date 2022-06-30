import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

const setUp = () => {
  return render(<App />);
};

describe("Initial UI loads as expected", () => {
  test("heading loads", async () => {
    setUp();
    expect(
      screen.getByRole("heading", {
        name: /itunes album search/i,
      })
    ).toBeInTheDocument();
  });

  test("repo link loads", async () => {
    setUp();
    expect(
      screen.getByRole("link", {
        name: /link to repo/i,
      })
    ).toBeInTheDocument();
  });
});

describe("App functions as expected", () => {
  test("initialised with empty state", async () => {
    setUp();
    expect(
      screen.getByText("Please search for something to view the results.")
    ).toBeInTheDocument();
  });

  test("search", async () => {
    setUp();

    userEvent.type(
      screen.getByRole("textbox", { name: /search/i }),
      "warren zevon"
    );

    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue(
      "warren zevon"
    );

    userEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(screen.getByText("Life'll Kill Ya")).toBeInTheDocument();
    });
  });
});
