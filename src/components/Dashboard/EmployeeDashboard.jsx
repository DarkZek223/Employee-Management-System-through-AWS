import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = (props) => {
  return (
    <div>
      <div className='Emp'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}
export default EmployeeDashboard