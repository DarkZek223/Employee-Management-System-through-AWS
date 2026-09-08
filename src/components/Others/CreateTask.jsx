import React, { useState } from 'react';

const API_URL =
  'https://o0kconoqk1.execute-api.us-east-1.amazonaws.com/dev/employees';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [category, setcategory] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    try {
      // 1. Get employees from AWS
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Failed to load employees from AWS');
      }

      const employees = await response.json();

      console.log('Employees from AWS:', employees);

      // 2. Find the employee
      const employee = employees.find(
        (elem) =>
          elem.firstName.toLowerCase() === assignTo.trim().toLowerCase()
      );

      if (!employee) {
        alert(`Employee "${assignTo}" was not found.`);
        return;
      }

      // Make sure tasks exists
      if (!employee.tasks) {
        employee.tasks = [];
      }

      // 3. Add new task
      employee.tasks.push(newTask);

      // Update task counts
      employee.taskCounts = {
        active: employee.tasks.filter((task) => task.active).length,
        newTask: employee.tasks.filter((task) => task.newTask).length,
        completed: employee.tasks.filter((task) => task.completed).length,
        failed: employee.tasks.filter((task) => task.failed).length
      };

      console.log('Updated employee:', employee);

      // 4. Send updated employee back to AWS
      const saveResponse = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });

      if (!saveResponse.ok) {
        throw new Error('Failed to save task to AWS');
      }

      const result = await saveResponse.json();

      console.log('Task saved to AWS:', result);

      alert('Task successfully saved to AWS!');

      // Clear form
      setTaskTitle('');
      setTaskDescription('');
      setTaskDate('');
      setassignTo('');
      setcategory('');

    } catch (error) {
      console.error('Error creating task:', error);
      alert('Error saving task: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='ADB-form'>
        <div className='ADB-1'>

          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder='Make a UI Design'
            />
          </div>

          <div className='ADB-2'>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
            />
          </div>

          <div className='ADB-2'>
            <h3>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setassignTo(e.target.value)}
              type="text"
              placeholder='Employee Name'
            />
          </div>

          <div className='ADB-2'>
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              type="text"
              placeholder='Design, Software, etc'
            />
          </div>

        </div>

        <div>
          <h3 className='ADB-1' id='DES'>Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>

          <button className='BTN'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;