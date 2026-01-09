"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/theme";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <AuthProvider>
            <Navbar />
            <Box sx={{ padding: 3 }}>{children}</Box>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
