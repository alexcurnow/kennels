import React from 'react'

export default (props) => (
  <section className="animal">
    <h3 className="animal__name">Name: {props.animal.name}</h3>
    <div className="animal__breed">Breed: {props.animal.breed}</div>
    <div className="animal__location">
      LocationId: {props.animal.locationId}
    </div>
    <div className="animal__customer">
      CustomerId: {props.animal.customerId}
    </div>
  </section>
)
