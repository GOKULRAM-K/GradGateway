"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
import api from "@/services/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("Registered successfully. Now login.");
    } catch (err: any) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          fullWidth
          select
          margin="normal"
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="STUDENT">Student</MenuItem>
          <MenuItem value="ADMIN">Admin</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
}
