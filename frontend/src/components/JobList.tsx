"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { Box, Typography, Paper } from "@mui/material";

type Job = {
  id: number;
  title: string;
  description?: string;
  requirements?: string;
  status: string;
};

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    api.get("/jobs/list").then((res) => setJobs(res.data));
  }, []);

  return (
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Job Roles
      </Typography>

      {jobs.map((job) => (
        <Paper key={job.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle1">{job.title}</Typography>
          <Typography variant="body2">{job.description}</Typography>
          <Typography variant="caption">Status: {job.status}</Typography>
        </Paper>
      ))}
    </Box>
  );
}
