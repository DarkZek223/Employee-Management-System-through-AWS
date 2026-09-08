import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
      <div className='TL1'>
        <div className='TL2'>
            <h3>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2>{data.taskTitle}</h2>
        <p>{data.taskDescription}</p>
        <div className='BUT'>
            <button className='M-1'>Mark as Completed</button>
            <button className='M-2'>Mark as Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
