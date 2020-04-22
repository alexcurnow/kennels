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
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Animals</h2>
    <AnimalProvider>
      <AnimalList />
    </AnimalProvider>

    <h2>Customers</h2>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>

    <h2>Employees</h2>
    <EmployeeProvider>
      <LocationProvider>
        <EmployeeList />
      </LocationProvider>
    </EmployeeProvider>
  </>
)
