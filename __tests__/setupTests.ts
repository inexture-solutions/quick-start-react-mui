import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Mock matchMedia for MUI components/tests that rely on it
if (typeof window !== "undefined" && !window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

// Cleanup DOM and restore mocks after each test
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

export {};
