import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/home/HomePage";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

// Prevent window.open from actually opening
vi.spyOn(window, "open").mockImplementation(() => null);

describe("HomePage", () => {
  it("renders hero and actions", () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", { name: /MUI React Quick Starter/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Get Started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Download Template/i })
    ).toBeInTheDocument();
    // 'View on GitHub' is rendered as a link (<a>), not a button
    expect(
      screen.getByRole("link", { name: /View on GitHub/i })
    ).toBeInTheDocument();
  });
});
