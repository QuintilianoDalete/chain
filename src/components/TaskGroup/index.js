import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import TaskCard from "../TaskCard";
import initialState from "../../store/ducks/initialState";

class TaskGroup extends Component {

  render() {
    const { tasks } = initialState;
    return (
      <Card.Group>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          handleDelete={
            function onHandleDelete() {
              const taskId = task.id;
              console.log(tasks);
              for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === taskId) {
                  return (tasks.splice(i, 1));
                }
              }
            }
          }
        />
      ))}
    </Card.Group>
    );
  }
}

TaskGroup.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TaskGroup;
