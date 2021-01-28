import './App.css';

import { useState } from 'react';

import Header from './Components/Header';
import Tasks from './Components/TaskItems/Tasks';
import AddTask from './Components/TaskItems/AddTask';

function App() {
  const [toggleTask, setToggle] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Appointment 1',
      day: 'Today',
      reminder: true,
    },
    {
      id: 2,
      text: 'Appointment 2',
      day: 'Next Week',
      reminder: false,
    },
    {
      id: 3,
      text: 'Appointment 3',
      day: 'Next Month',
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    //console.log(task);
    setTasks([...tasks, task]);
  };

  // Delete Task
  const deleteTask = (taskID) => {
    //console.log('Delete ', taskID);
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskID;
      })
    );
  };

  // Toggle Reminder
  const toggleReminder = (taskID) => {
    //console.log('Reminder ', taskID);

    setTasks(
      tasks.map((task) => {
        if (task.id === taskID) {
          return { ...task, reminder: !task.reminder };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className='container'>
      <Header
        title='Terrific Task Tracker'
        displayTask={() => setToggle(!toggleTask)}
      />
      {toggleTask ? <AddTask addTask={addTask} /> : ''}
      {tasks.length === 0 ? (
        'No Tasks To Show'
      ) : (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      )}
    </div>
  );
}

export default App;