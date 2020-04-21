import React from 'react'

export default (props) => (
  <section className="animal">
    <h3 className="animal__name">Name: {props.animal.name}</h3>
    <div className="animal__breed">Breed: {props.animal.breed}</div>
  </section>
)
