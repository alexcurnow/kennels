import React, { useContext, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import { LocationContext } from '../locations/LocationProvider'

export const EditEmployeeForm = (employee, { toggleEdit }) => {
  const { updateEmployee } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)

  const [updatedEmployee, setEmployee] = useState(employee)

  const handleControlledInputChange = (event) => {
    const newEmployee = Object.assign({}, updatedEmployee)
    newEmployee[event.target.name] = event.target.value
    setEmployee(newEmployee)
  }

  const editEmployee = () => {
    const locationId = parseInt(updatedEmployee.locationId)

    if (locationId === 0) {
      window.alert('Please select an employee')
    } else {
      updateEmployee({
        id: updatedEmployee.id,
        name: updatedEmployee.name,
        locationId: locationId,
      }).then(toggleEdit)
    }
  }

  return (
    <form className="employeeForm">
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
            defaultValue={employee.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select
            name="locationId"
            className="form-control"
            defaultValue={employee.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(evt) => {
          evt.preventDefault()
          editEmployee()
        }}
      >
        Save Updates
      </button>
    </form>
  )
}
