"use client";

import { Typography } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import JobList from "@/components/JobList";

export default function StudentDashboard() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user || user.role !== "STUDENT")
    return <Typography>Access denied</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>

      <JobList />
    </>
  );
}
