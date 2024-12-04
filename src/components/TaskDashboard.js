import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Filters from "./Filters";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";

const TaskDashboard = () => (
  <Box>
    {/* Header */}
    <AppBar position="static" style={{ marginBottom: "20px" }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Task Management Dashboard
        </Typography>
      </Toolbar>
    </AppBar>

    {/* Content */}
    <Box style={{ padding: "20px" }}>
      <TaskForm />
      <Filters />
      <TaskList />
    </Box>
  </Box>
);

export default TaskDashboard;
