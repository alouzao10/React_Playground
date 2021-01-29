import './App.css';

import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import Tasks from './Components/TaskItems/Tasks';
import AddTask from './Components/TaskItems/AddTask';

import About from './Components/About';
import Footer from './Components/Footer/Footer';

function App() {
  const [toggleTask, setToggle] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Using json-server to store our data
  // Make a fetch request to the URL to load in the JSON data
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Add Task
  const addTask = async (task) => {
    //console.log(task);

    // Add task record to the json-server
    await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => setTasks([...tasks, data]));

    //setTasks([...tasks, task]);
  };

  // Delete Task
  const deleteTask = async (taskID) => {
    //console.log('Delete ', taskID);

    // Delete the record from the json-server
    await fetch(`http://localhost:5000/tasks/${taskID}`, { method: 'DELETE' });

    setTasks(
      tasks.filter((task) => {
        return task.id !== taskID;
      })
    );
  };

  // Toggle Reminder
  const toggleReminder = async (taskID) => {
    //console.log('Reminder ', taskID);

    let currTask;
    // Set the reminder toggle in the json-server
    await fetch(`http://localhost:5000/tasks/${taskID}`)
      .then((res) => res.json())
      .then((data) => (currTask = { ...data, reminder: !data.reminder }));

    await fetch(`http://localhost:5000/tasks/${taskID}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(currTask),
    })
      .then((res) => res.json())
      .then((data) => (currTask = { ...data, reminder: !data.reminder }));

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
    <Router>
      <div className='container'>
        <Header
          title='Terrific Task Tracker'
          displayTask={() => setToggle(!toggleTask)}
        />

        <Route
          exact
          path='/'
          render={(props) => (
            <Fragment>
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
            </Fragment>
          )}
        />
        <Route exact path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
