import React, { useState, useRef, useEffect } from 'react'
// text input useref ka use kr rhe hai ..

import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
    // component ko mount krne ke liye [] square bracket ka use kre hai.
  }, [])

  const handleAdd = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        // swal is sweetAlert jo hme alert message sent krta hai.
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }


// create a new id .
    const id = employees.length + 1;

    // new id ke liye object create kr rhe hai
    const newEmployee = {

      // js me key and value agar same hota h to is type se likha jata hai
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    }
    // yaha employee ko update kr rhe hai
    employees.push(newEmployee);
    setEmployees(employees);
    // adding ka kam hone ke bad back me jane ke liye adding ko false value provide kr rhe hai
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    });
  }


  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>


        {/*  first field input text*/}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
          name="firstName"
          value={firstName}
          placeholder='Enter The First Name..'
          onChange={e => setFirstName(e.target.value)}
        />

        {/* second field input text */}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          placeholder='Enter The Last Name....'
          onChange={e => setLastName(e.target.value)}
        />

        {/* third field input text */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          placeholder='Enter The Email.....'
          onChange={e => setEmail(e.target.value)}
        />

        {/* fourth field input text  */}
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />


        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            // jb hmne setIsAdding ko call kiya tha to o true pass hua tha ab use hm false kr rhe hai.
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}


export default Add

