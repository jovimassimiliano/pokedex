import React from 'react';
import { Link } from 'react-router-dom'

const Pokemon = ({item, filter}) => {

  return(
    <div className="container">
      <Link to={`/detail/${filter ? item['pokemon'].name : item.name}`}>
        <h3 className="text-capitalize">{filter ? item['pokemon'].name : item.name}</h3>
      </Link>
    </div>
  )
}

export default Pokemon;