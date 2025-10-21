import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import App from "@/App";

interface Options extends Omit<RenderOptions, "wrapper"> {}

function Wrapper({ children }: { children?: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function render(ui: React.ReactElement, options?: Options) {
  return rtlRender(ui, {
    wrapper: (props) => <Wrapper {...props} />,
    ...options,
  });
}

// Render the full App (which provides store/persistor/router)
export function renderApp(options?: Options) {
  return rtlRender(<App />, {
    wrapper: (props) => <Wrapper {...props} />,
    ...options,
  });
}

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export default { render };
