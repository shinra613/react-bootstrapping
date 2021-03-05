import React from "react"


export default function user({ name, role }) {

  return (<div className="details">
    <h1>{name.toUpperCase()}</h1>
    <h2>{role}</h2>
  </div>)

}
