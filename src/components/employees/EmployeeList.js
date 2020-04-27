import React, { useContext, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import Employee from './Employee'
import { LocationContext } from '../locations/LocationProvider'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import EmployeeForm from './EmployeeForm'
import { EditEmployeeForm } from './EditEmployeeForm'
import './Employee.css'

export const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)

  const [selectedEmployee, setEmployee] = useState({
    employee: { id: 0 },
    location: null,
  })

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [editModal, setEditModal] = useState(false)
  const toggleEdit = () => setEditModal(!editModal)

  return (
    <>
      <div className="fakeLink href" onClick={toggle}>
        New Employee
      </div>

      <div className="employees">
        {employees.map((employee) => {
          const foundLocation = locations.find(
            (loc) => employee.locationId === loc.id
          )
          return (
            <>
              <Employee
                key={employee.id}
                employee={employee}
                location={foundLocation}
              />
              <Button
                color="info"
                className="editEmployee"
                onClick={() => {
                  const location = locations.find(
                    (l) => l.id === employee.locationId
                  )
                  setEmployee(employee, location)
                  toggleEdit()
                }}
              >
                Edit employee info
              </Button>
            </>
          )
        })}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Employee</ModalHeader>
        <ModalBody>
          <EmployeeForm toggler={toggle} />
        </ModalBody>
      </Modal>

      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>{selectedEmployee.name}</ModalHeader>
        <ModalBody>
          <EditEmployeeForm
            key={selectedEmployee.id}
            toggleEdit={toggleEdit}
            {...selectedEmployee}
          />
        </ModalBody>
      </Modal>
    </>
  )
}
