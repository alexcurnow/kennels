import React, { useContext } from 'react'
import { AnimalsContext } from './animalProvider'
import Animal from './Animal'
import './Animals.css'
import { LocationContext } from '../locations/LocationProvider'
import { CustomerContext } from '../customers/customerProvider'

export default () => {
  const { animals } = useContext(AnimalsContext)
  const { locations } = useContext(LocationContext)
  const { customers } = useContext(CustomerContext)

  return (
    <div className="animals">
      {animals.map((animal) => {
        const matchingLoc = locations.find(
          (loc) => loc.id === animal.locationId
        )
        const matchingCus = customers.find(
          (cus) => cus.id === animal.customerId
        )

        return (
          <Animal
            key={animal.id}
            animal={animal}
            location={matchingLoc}
            customer={matchingCus}
          />
        )
      })}
    </div>
  )
}
