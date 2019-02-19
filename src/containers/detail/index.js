import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';
import PokemonDescription from '../../components/PokemonDescription';

class Detail extends Component {
  state = {
    pokemon: undefined,
    loading: false
  }

  componentDidMount(){
    const { match: { params : { id } } } = this.props

    this.handleFetchDetail(id);
  }

  handleFetchDetail = (id) => {
    this.setState({
      loading : true
    })
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => this.setState({
        pokemon: res.data,
        loading: false
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { pokemon, loading } = this.state;
  
    if(loading){
      return(
        <Loader/>
      )
    }
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h1 className="text-capitalize">{pokemon && pokemon.name}</h1>
        <div className="row">
          <div className="col-md-2">
            {
              pokemon && (
                <img src={pokemon.sprites["front_default"]} alt={pokemon.name}/>
              )
            }
          </div>
          <div className="col-md-6">
            <PokemonDescription description={pokemon}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;