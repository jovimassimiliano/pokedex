import React from 'react';
import { Link } from 'react-router-dom'

const Pokemon = ({item}) => {

  return(
    <div className="container">
      <Link to={`/detail/${item.name}`}>
        <h3 className="text-capitalize">{item.name}</h3>
      </Link>
    </div>
  )
}

export default Pokemon;