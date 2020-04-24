import React, { useContext, useState, useEffect } from 'react'
import { AnimalsContext } from './AnimalProvider'
import Animal from './Animal'
import './Animals.css'
import { LocationContext } from '../locations/LocationProvider'
import { CustomerContext } from '../customer/CustomerProvider'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import AnimalForm from './AnimalForm'

export default ({ searchTerms }) => {
  const { animals } = useContext(AnimalsContext)
  const { locations } = useContext(LocationContext)
  const { customers } = useContext(CustomerContext)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [filteredAnimals, setFiltered] = useState([])

  useEffect(() => {
    if (searchTerms !== '') {
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      )
      setFiltered(subset)
    } else {
      setFiltered([])
    }
  }, [searchTerms, animals])

  if (filteredAnimals.length === 0) {
    return (
      <>
        <div className="fakeLink href" onClick={toggle}>
          Make Appointment
        </div>
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
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Animal</ModalHeader>
          <ModalBody>
            <AnimalForm toggler={toggle} />
          </ModalBody>
        </Modal>
      </>
    )
  } else {
    return (
      <>
        <div className="fakeLink href" onClick={toggle}>
          Make Appointment
        </div>
        <div className="animals">
          {filteredAnimals.map((animal) => {
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
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Animal</ModalHeader>
          <ModalBody>
            <AnimalForm toggler={toggle} />
          </ModalBody>
        </Modal>
      </>
    )
  }
}
