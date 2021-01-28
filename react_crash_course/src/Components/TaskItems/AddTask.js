import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [taskID, setTaskID] = useState(4);
  const [taskTxt, setTaskTxt] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskRemind, setTaskRemind] = useState(false);

  const updateTask = (e) => {
    e.preventDefault();
    var taskItem = e.target.name;
    var taskValue = e.target.value;
    switch (taskItem) {
      case 'text':
        setTaskTxt(taskValue);
        break;
      case 'date':
        setTaskDate(taskValue);
        break;
      default:
        break;
    }
  };

  const submitTask = (e) => {
    e.preventDefault();

    if (!taskTxt) {
      alert('Enter Task');
      return;
    }
    if (!taskDate) {
      alert('Enter Date');
      return;
    }

    addTask({
      id: taskID,
      text: taskTxt,
      day: taskDate,
      reminder: taskRemind,
    });
    let newID = taskID + 1;
    setTaskID(newID);
    setTaskTxt('');
    setTaskDate('');
    setTaskRemind(false);
  };

  return (
    <form className='add-form' onSubmit={submitTask}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task...'
          value={taskTxt}
          onChange={updateTask}
          name='text'
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          type='text'
          placeholder='Add Date & Time...'
          value={taskDate}
          onChange={updateTask}
          name='date'
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          value={taskRemind}
          checked={taskRemind}
          onChange={(e) => setTaskRemind(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
}

export default AddTask;
