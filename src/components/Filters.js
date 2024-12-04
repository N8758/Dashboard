import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, ButtonGroup, Container } from "@mui/material";

const Filters = () => {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue") return new Date(task.dueDate) < new Date();
    return true;
  });

  return (
    <Container>
      <ButtonGroup variant="contained" fullWidth>
        <Button onClick={() => setFilter("all")} color={filter === "all" ? "primary" : "default"}>
          All Tasks
        </Button>
        <Button onClick={() => setFilter("completed")} color={filter === "completed" ? "primary" : "default"}>
          Completed
        </Button>
        <Button onClick={() => setFilter("pending")} color={filter === "pending" ? "primary" : "default"}>
          Pending
        </Button>
        <Button onClick={() => setFilter("overdue")} color={filter === "overdue" ? "primary" : "default"}>
          Overdue
        </Button>
      </ButtonGroup>
      <p>{filteredTasks.length} tasks shown</p>
    </Container>
  );
};

export default Filters;
