"use client";

import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GradGateway
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* While checking session */}
          {loading && (
            <Typography component="span" sx={{ opacity: 0.8 }}>
              Checking session...
            </Typography>
          )}

          {/* Not logged in */}
          {!loading && !user && (
            <>
              <Button color="inherit" component={Link} href="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} href="/register">
                Register
              </Button>
            </>
          )}

          {/* Logged in */}
          {!loading && user && (
            <>
              {/* Dashboard link */}
              {user.role === "ADMIN" && (
                <Button
                  color="inherit"
                  component={Link}
                  href="/admin/dashboard"
                >
                  Dashboard
                </Button>
              )}

              {user.role === "STUDENT" && (
                <Button
                  color="inherit"
                  component={Link}
                  href="/student/dashboard"
                >
                  Dashboard
                </Button>
              )}

              <Typography component="span" sx={{ mx: 1 }}>
                {user.name} ({user.role})
              </Typography>

              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
