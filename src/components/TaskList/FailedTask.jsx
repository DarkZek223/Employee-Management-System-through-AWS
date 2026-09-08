import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className='TL1 TL1-3'>
        <div className='TL2'>
            <h3>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2>{data.taskTitle}</h2>
        <p>{data.taskDescription}</p>
        <div className='FA'>
            <button>Failed</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
