import React from 'react';
import { Link } from 'react-router-dom'

const Pokemon = ({item}) => {

  return(
    <div className="container">
      <Link to={`/detail/${item.name}`}>
        <h1>{item.name}</h1>
      </Link>
    </div>
  )
}

export default Pokemon;