/// <reference types="vitest" />

import { test, expect } from "vitest";
import { renderApp } from "./test-utils";

// Smoke/integration test: render the full App and assert the home heading exists
test("App mounts and shows the home hero heading", () => {
  const { getByText } = renderApp();

  // HomePage top heading contains 'MUI React Quick Starter'
  const heading = getByText(/MUI React Quick Starter/i);
  expect(heading).toBeInTheDocument();
});
