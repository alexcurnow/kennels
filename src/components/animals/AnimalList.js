import React, { useContext } from 'react'
import { AnimalsContext } from './animalProvider'
import Animal from './Animal'
import './Animals.css'

export default () => {
  const { animals } = useContext(AnimalsContext)

  return (
    <div className="animals">
      {animals.map((animal) => (
        <Animal key={animal.id} animal={animal} />
      ))}
    </div>
  )
}
