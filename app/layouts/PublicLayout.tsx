import { FC } from "react";
import { Outlet } from "react-router";
import { AppBar, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import Header from "@components/common/Header.tsx";

const PublicLayout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Header />
      </AppBar>
      <Outlet />
    </ThemeProvider>
  );
};

export default PublicLayout;
