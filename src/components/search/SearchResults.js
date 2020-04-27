import React, { useState, useContext, useEffect } from 'react'
import { AnimalsContext } from '../animals/animalProvider'
import { Animal } from '../animals/Animal'
import { CustomerContext } from '../customer/CustomerProvider'
import { LocationContext } from '../locations/LocationProvider'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { AnimalForm } from '../animals/AnimalForm'

export const SearchResults = ({ searchTerms }) => {
  const { animals, releaseAnimal } = useContext(AnimalsContext)
  const { customers } = useContext(CustomerContext)
  const { locations } = useContext(LocationContext)

  const [filteredAnimals, setFiltered] = useState([])
  const [selectedAnimal, setAnimal] = useState({
    animal: { id: 0 },
    location: null,
    customer: null,
  })

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [editModal, setEditModal] = useState(false)
  const toggleEdit = () => setEditModal(!editModal)

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

  return (
    <div className="searchResults">
      <h3>Results</h3>
      <div className="animals">
        {filteredAnimals.map((animal) => (
          <div
            className="fakeLink href"
            onClick={() => {
              const location = locations.find((l) => l.id === animal.locationId)
              const customer = customers.find((c) => c.id === animal.customerId)

              setAnimal({ animal, location, customer })
              toggle()
            }}
          >
            {animal.name}
          </div>
        ))}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedAnimal.animal.name}</ModalHeader>
        <ModalBody>
          <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="info"
            onClick={() => {
              toggleEdit()
              toggle()
            }}
          >
            Edit
          </Button>
          <Button
            color="danger"
            onClick={() => {
              releaseAnimal(selectedAnimal.animal.id)
              toggle()
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>
          {selectedAnimal.animal.name}
        </ModalHeader>
        <ModalBody>
          <AnimalForm
            key={selectedAnimal.animal.id}
            toggleEdit={toggleEdit}
            {...selectedAnimal}
          />
        </ModalBody>
      </Modal>
    </div>
  )
}
