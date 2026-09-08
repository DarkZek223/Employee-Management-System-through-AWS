import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className='TL1 TL1-1'>
        <div className='TL2'>
            <h3>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2>{data.taskTitle}</h2>
        <p>{data.taskDescription}</p>
        <div className='NT'>
            <button>Accept a Task</button>
        </div>
      </div>
    </div>
  )
}
export default NewTask