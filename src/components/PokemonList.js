import React from 'react';

import Pokemon from './Pokemon';

const PokemonList = props => {
  const { items, filter } = props;

  return(
    <React.Fragment>
    {
      items.map((item, index) => {
        return(
          <Pokemon filter={filter} key={index} item={item}/>
        )
      })
    }
    </React.Fragment>
  )
}

export default PokemonList;