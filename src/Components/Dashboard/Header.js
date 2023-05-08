import React from 'react'

// js me props pass na krke hm yaha setIsAdding pass kra rhe hai.
const Header = ({setIsAdding}) => {
  return (
    <header>
      <h1>Employee Management System</h1>

      <div>
        <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
      </div>
    </header>
  )
}

export default Header
