"use client";

import { Typography } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import CreateJobForm from "@/components/CreateJobForm";
import JobList from "@/components/JobList";

export default function AdminDashboard() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user || user.role !== "ADMIN")
    return <Typography>Access denied</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <CreateJobForm />
      <JobList />
    </>
  );
}
