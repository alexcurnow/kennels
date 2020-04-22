import React from 'react'

export default ({ animal, location, customer }) => (
  <section className="animal">
    <h3 className="animal__name">Name: {animal.name}</h3>
    <div className="animal__breed">Breed: {animal.breed}</div>
    <div className="animal__location">Location: {location.name}</div>
    <div className="animal__customer">Customer: {customer.name}</div>
  </section>
)
