import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const authData = useContext(AuthContext);
   console.log(authData.employees);
  return (
  <div className='AT'>
    <div className='AT1'>
    <h2 className='NM'>Employee Name</h2>
    <h3 className='NM1'>New Task</h3>
    <h3 className='NM2'>Active Task</h3>
    <h3 className='NM2'>Completed</h3>
    <h3 className='NM3'>Failed Task</h3>
  </div>
  <div className='FN'>
    {authData.employees.map(function(elem,idx){
         return <div className='AT1-1' key={idx}>
           <h2 className='FN-1'>{elem.firstName}</h2>
           <h3 className='FN-2'>{elem.taskCounts.newTask}</h3>
           <h3 className='FN-3'>{elem.taskCounts.active}</h3>
           <h3 className='FN-4'>{elem.taskCounts.completed}</h3>
           <h3 className='FN-5'>{elem.taskCounts.failed}</h3>
        </div>
      })}
    </div>
  </div>
  )
}

export default AllTask
