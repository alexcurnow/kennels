import React from 'react'

export default (props) => (
  <>
    <section className="customer">
      <h3 className="customer__name">{props.customer.name}</h3>
      <div className="customer__address">{props.customer.address}</div>
    </section>
  </>
)
