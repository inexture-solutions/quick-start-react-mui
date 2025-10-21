import { test, expect } from "vitest";
import { render } from "./test-utils";
import { StrictMode } from "react";
import App from "@/App";

// Basic smoke test for app/index.tsx render flow
test("App root renders without crashing", () => {
  // Create a container similar to the real index.html
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.appendChild(root);

  // Render the App into this container using our custom renderer that provides store/theme/router
  render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  expect(document.getElementById("root")).toBeTruthy();
});
