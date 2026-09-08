import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className='TL1 TL1-2'>
        <div className='TL2'>
            <h3>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2>{data.taskTitle}</h2>
        <p>{data.taskDescription}</p>
        <div className='CO'>
            <button>Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
