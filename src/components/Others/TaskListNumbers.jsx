import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='TLN'>
      <div className='TLN1'>
        <h2>{data.taskCounts.newTask}</h2>
        <h3>New Task</h3>
      </div>
      <div className='TLN2'>
        <h2>{data.taskCounts.completed}</h2>
        <h3>Completed Task</h3>
      </div>
      <div className='TLN3'>
        <h2>{data.taskCounts.active}</h2>
        <h3>Active Task</h3>
      </div>
      <div className='TLN4'>
        <h2>{data.taskCounts.failed}</h2>
        <h3>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
