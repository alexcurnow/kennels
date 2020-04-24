import React, { useState } from 'react'
import { LocationProvider } from './locations/LocationProvider'
import LocationList from './locations/LocationList'
import { EmployeeProvider } from './employees/EmployeeProvider'
import EmployeeList from './employees/EmployeeList'
import { AnimalProvider } from './animals/AnimalProvider'
import AnimalList from './animals/AnimalList'
import { CustomerProvider } from './customer/CustomerProvider'
import CustomerList from './customer/CustomerList'
import { SearchBar } from './search/SearchBar'
import { SearchResults } from './search/SearchResults'
import './Layout.css'

export default () => {
  const [searchTerms, setTerms] = useState(null)

  return (
    <div className="mainContainer">
      <AnimalProvider>
        <CustomerProvider>
          <EmployeeProvider>
            <LocationProvider>
              <div className="searchContainer">
                <SearchBar setTerms={setTerms} />
                <SearchResults searchTerms={searchTerms} />
              </div>
              <div className="dataContainer">
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>
                <h2>Locations</h2>
                <LocationList />
                <h2>Animals</h2>
                <AnimalList searchTerms={searchTerms} />
                <h2>Customers</h2>
                <CustomerList />
                <h2>Employees</h2>
                <EmployeeList />
              </div>
            </LocationProvider>
          </EmployeeProvider>
        </CustomerProvider>
      </AnimalProvider>
    </div>
  )
}
