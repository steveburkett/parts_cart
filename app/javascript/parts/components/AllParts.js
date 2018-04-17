import React from 'react'
import Part from './Part'

const AllParts = (props) => {
  let parts = props.parts.map((part) => {
    return (
      <div key={part.id}>
        <Part part={part} />
      </div>
    )
  });
  return(
    <div> {parts} </div>
  )
}

export default AllParts;

