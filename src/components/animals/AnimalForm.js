import React, { useContext, useRef } from 'react'
import { LocationContext } from '../locations/LocationProvider'
import { AnimalsContext } from './animalProvider'
import './Animals.css'
import { CustomerContext } from '../customers/customerProvider'

export default (props) => {
  const { addAnimal } = useContext(AnimalsContext)
  const { locations } = useContext(LocationContext)
  const { customers } = useContext(CustomerContext)

  const name = useRef()
  const location = useRef()
  const customer = useRef()

  const constructNewAnimal = () => {
    const locationId = parseInt(location.current.value)
    const customerId = parseInt(customer.current.value)
    if (locationId === 0) {
      window.alert('Please select a location')
    } else {
      addAnimal({
        name: name.current.value,
        locationId: locationId,
        customerId: customerId,
      }).then(props.toggler)
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalCustomer">Assign owner: </label>
          <select
            defaultValue=""
            name="customer"
            ref={customer}
            id="animalCustomer"
            className="form-control"
          >
            <option value="0">Select a customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
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
        onClick={(evt) => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewAnimal()
        }}
        className="btn btn-primary"
      >
        Save Animal
      </button>
    </form>
  )
}
