"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setError("");
      const user = await login(email, password);

      // Redirect based on role
      if (user.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else {
        router.push("/student/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 1 }}>
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
