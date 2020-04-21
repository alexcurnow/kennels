import React from 'react'

export default (props) => (
  <>
    <section className="location">
      <h3 className="location__name">{props.location.name}</h3>
      <div className="location__address">{props.location.address}</div>
    </section>
  </>
)
