import React from 'react'
import { Button } from 'reactstrap'

export default ({ employee, location }) => (
  <>
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__address">Address: {employee.address}</div>
      <div className="employee__location">Location: {location.name}</div>
    </section>
  </>
)
