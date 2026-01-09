"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import api from "@/services/api";

export default function CreateJobForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleCreate = async () => {
    await api.post("/jobs/create", {
      title,
      description,
      requirements,
      cutoff_count: 5,
    });

    alert("Job created");
    window.location.reload();
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Create Job Role
      </Typography>

      <TextField
        fullWidth
        label="Title"
        margin="normal"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Description"
        margin="normal"
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        fullWidth
        label="Requirements"
        margin="normal"
        onChange={(e) => setRequirements(e.target.value)}
      />

      <Button variant="contained" sx={{ mt: 2 }} onClick={handleCreate}>
        Create
      </Button>
    </Paper>
  );
}
