import React, { useContext } from 'react'
import { EmployeeContext } from './employeeProvider'
import Employee from './Employee'
import './Employee.css'

export default () => {
  const { employees } = useContext(EmployeeContext)

  return (
    <div className="employees">
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  )
}
