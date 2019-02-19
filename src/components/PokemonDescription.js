import React from 'react';

const PokemonDescription = (props) => {
  const { description } = props;
  return(
    <div className="row">
      <div className="col-md-6">
        <p className="font-weight-bold">Height</p>
        <p>{description && description.height * 10} cm</p>
      </div>
      <div className="col-md-6">
        <p className="font-weight-bold">Weight</p>
        <p>{description && description.height / 10} kg</p>
      </div>
      <div className="col-md-6">
        <p className="font-weight-bold">Types</p>
        <ul className="list-inline">
          {
            description &&
            description.types.map((type,index) => {
              return(
                <li className="list-inline-item" key={index}>
                  <span className="badge badge-pill badge-dark text-capitalize">
                  {type['type'].name}
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="col-md-6">
        <p className="font-weight-bold">Base XP</p>
        <p>{description && description.base_experience}</p>
      </div>
    </div>
  )
}

export default PokemonDescription;