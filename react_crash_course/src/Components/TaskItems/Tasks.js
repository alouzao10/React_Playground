import React from 'react';

import Task from './Task';

function Tasks({ tasks, deleteTask, toggleReminder }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </div>
  );
}

export default Tasks;
