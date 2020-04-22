import React from 'react'
import LocationList from './locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'
import './Kennel.css'
import { AnimalProvider } from './animals/animalProvider'
import AnimalList from './animals/AnimalList'
import { CustomerProvider } from './customers/customerProvider'
import CustomerList from './customers/CustomerList'
import { EmployeeProvider } from './employees/EmployeeProvider'
import EmployeeList from './employees/EmployeeList'

export default () => (
  <>
    <AnimalProvider>
      <CustomerProvider>
        <EmployeeProvider>
          <LocationProvider>
            <h2>Locations</h2>
            <LocationList />
            <h2>Animals</h2>
            <AnimalList />
            <h2>Customers</h2>
            <CustomerList />
            <h2>Employees</h2>
            <EmployeeList />
          </LocationProvider>
        </EmployeeProvider>
      </CustomerProvider>
    </AnimalProvider>
  </>
)
