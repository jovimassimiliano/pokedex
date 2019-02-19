import React, { Component } from 'react';
import axios from 'axios';

import PokemonList from '../../components/PokemonList';
import Pokeball from '../../pokeball.png';

class Home extends Component {
  state = {
    list: [],
    loading: false,
    limit: 0
  }

  componentDidMount() {
    this.handleFetchPokemon();
  }

  handleFetchPokemon = () => {
    const { limit } = this.state;
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit + 10}`)
      .then(res => 
            this.setState({
              list: res.data.results,
              loading: false ,
              limit: limit + 10
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
        <div className="row">
          <PokemonList items={list}/>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={this.handleFetchPokemon}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;