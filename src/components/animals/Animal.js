import React from 'react'

export const Animal = ({ animal, location, customer }) => (
  <section className="animal">
    <div className="animal__breed">Breed: {animal.breed}</div>
    <div className="animal__location">Location: {location.name}</div>
    <div className="animal__customer">Customer: {customer.name}</div>
  </section>
)
