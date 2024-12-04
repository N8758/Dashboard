import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../store/tasksSlice";
import { Card, CardContent, Button, Typography, Grid, Container } from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <Container>
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2">{task.description}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Due: {task.dueDate}
                </Typography>
                <Button
                  variant="outlined"
                  color={task.completed ? "success" : "default"}
                  onClick={() => dispatch(toggleComplete(task.id))}
                  startIcon={<CheckCircle />}
                >
                  {task.completed ? "Completed" : "Mark as Complete"}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteTask(task.id))}
                  startIcon={<Delete />}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TaskList;
