import React, { Component } from 'react';
import axios from 'axios';

import PokemonList from '../../components/PokemonList';
import FilterForm from '../../components/Form';
import Pokeball from '../../pokeball.png';

class Home extends Component {
  state = {
    list: [],
    types: [],
    loading: false,
    limit: 0,
    filterBy: ''
  }

  componentDidMount() {
    this.handleFetchPokemon();
    this.handleFetchPokemonType();
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

  handleFetchPokemonType = () => {
    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => 
        this.setState({
          types: res.data.results,
          loading:false
        })
      )
  }

  handleFilterPokemonByType = (searchType) => {
    axios.get(`https://pokeapi.co/api/v2/type/${searchType}`)
      .then(res => 
        this.setState({
          list: res.data.pokemon,
          loading:false,
          filterBy: searchType
        })
      )
  }

  render() {
    const { list, types, filterBy } = this.state;

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
          <div className="col-md-4 offset-md-3">
            <FilterForm
              handleFilter={this.handleFilterPokemonByType}
              value={filterBy}
              options={types}
            />
            <div className="row">
              <PokemonList
                filter={filterBy}
                items={list}
              />
              <div className="col">
                {
                  !filterBy &&

                  <button
                  className="btn btn-primary"
                  onClick={this.handleFetchPokemon}
                  >
                    Load More
                  </button>
                }
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Home;