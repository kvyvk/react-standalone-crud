import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    //data is set from employyes_data in index.js inside data directory
    const data = JSON.parse(localStorage.getItem('employees_data'));
    //employyes state is set to data
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  const handleEdit = id => {
    //filter employees based on id
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    //navigates to edit page.
    setIsEditing(true);
  };

  const handleDelete = id => {
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

        const employeesCopy = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
      }
    });
  };

  return (
    <><Header
      setIsAdding={setIsAdding}
      setIsAuthenticated={setIsAuthenticated} /><div className="container">
        {!isAdding && !isEditing && (
          <>

            <Table
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete} />
          </>
        )}
        {isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding} />
        )}
        {isEditing && (
          <Edit
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing} />
        )}
      </div></>
  );
};

export default Dashboard;
