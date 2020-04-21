import React from 'react'

export default (props) => (
  <>
    <section className="employee">
      <h3 className="employee__name">{props.employee.name}</h3>
      <div className="employee__address">{props.employee.address}</div>
      <div className="employee__location">
        LocationId: {props.employee.locationId}
      </div>
    </section>
  </>
)
