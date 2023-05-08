import React, { useState } from 'react';
//local state ko mantain krne ke liye hooks ka use kiya jata hai.

import Swal from 'sweetalert2';
//jo jo click krenge o component dikhega 
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit'
import { employeesData } from '../../data'


const Navbar = () => {
    //employee data ko locally import  rhe hai
    const [employees, setEmployees] = useState(employeesData);

    //kisi employee ko select krne se phle uska value null hota hai
    // selectedemployee se employee ko select krke edit ko pass krte hai 
    // fir particular employee ka value show krta hai
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    // agr hum add ya edit ko click krenge to particular component open hoga uske liye usestae ka use kr rhe hai.
    const [isAdding, setIsAdding] = useState(false);
    // agar ye dono false hai to list or heading dikhna h
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }
    // callig delete function...
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        // parent div
        <div className='Container'>

        {/* Dashboard */}
       
            {!isAdding && !isEditing && (
                <>
                    {/* ise render kr rhe hai */}
                    <Header
                    // isadding name ka props pass kr rhe hai.
                        setIsAdding={setIsAdding}
                    />
                    {/* list data table hai */}
                    {/* isme delete and edit ka functionality hai. */}
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}


            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />

            )}

            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />

            )}



        </div>
    )
}

export default Navbar

// react uni-derectional hota hai.