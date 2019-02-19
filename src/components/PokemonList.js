import React from 'react';

import Pokemon from './Pokemon';

const PokemonList = props => {
  const { items } = props;

  return(
    <React.Fragment>
    {
      items.map((item, index) => {
        return(
          <Pokemon key={index} item={item}/>
        )
      })
    }
    </React.Fragment>
  )
}

export default PokemonList;