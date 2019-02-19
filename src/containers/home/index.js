import React, { Component } from 'react';
import axios from 'axios';

import PokemonList from '../../components/PokemonList';
import Pokeball from '../../pokeball.png';

class Home extends Component {
  state = {
    list: [],
    loading: false,
    limit: 10
  }

  componentDidMount() {
    this.handleFetchPokemon();
  }

  handleFetchPokemon = () => {
    const { limit } = this.state;
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(res => 
            this.setState({
              list: res.data.results,
              loading: false 
            })
          )
      .catch(err => console.log('err',err));
  }

  render() {
    const { list } = this.state;

    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-2 offset-md-3">
            <img src={Pokeball} alt="pokeball" width="70"/>
          </div>
          <div className="col-md-2">
            <h1>Pokedex</h1>
          </div>
        </div>
        <PokemonList items={list}/>
      </div>
    )
  }
}

export default Home;