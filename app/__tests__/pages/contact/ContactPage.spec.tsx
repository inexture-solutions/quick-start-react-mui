import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "@/pages/contact/ContactPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

function setup() {
  render(
    <ThemeProvider theme={theme}>
      <ContactPage />
    </ThemeProvider>
  );
}

describe("ContactPage", () => {
  it("updates live preview as user types", () => {
    setup();

    fireEvent.change(screen.getByLabelText(/Your Name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "This is a test message" },
    });

    // Chips show name/email
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();

    // Subject and message preview
    expect(screen.getByText("Hello")).toBeInTheDocument();
    const previews = screen.getAllByText(/This is a test message/);
    expect(previews.length).toBeGreaterThan(0);

    // JSON preview contains keys
    expect(screen.getByText(/"name": "Jane Doe"/)).toBeInTheDocument();
    expect(screen.getByText(/"email": "jane@example.com"/)).toBeInTheDocument();
  });
});
