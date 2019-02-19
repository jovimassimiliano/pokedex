import React, { Component } from 'react'
import axios from 'axios';
import Loader from '../../components/Loader';

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
        <h1>Detail</h1>
        <button className="btn btn-warning">Hello</button>
      </div>
    )
  }
}

export default Detail;