import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import Listings from '../Listings/Listings'
import ListingDetails from '../Listings/ListingDetails'
import fetchData from '../api/apiCall'
import './App.css';

export default class App extends Component {
    constructor(){
      super();
      this.state = {
          listingsSale: "",
          listingsRent: "",
        }
      }

  componentDidMount(){
    const sale = fetchData.retriveListings('sale', 20)
    const rent = fetchData.retriveListings('rent', 10)
    return Promise.all([sale, rent])
      .then(data => {
        this.setState( { listingsSale: data[0], listingsRent: data[1] })
      })
  }

  render() {
    return (
      <main className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path='/:type'
            render={({match}) => {
              console.log(this.state)
              const typeToState = match.params.type.charAt(0).toUpperCase() + match.params.type.slice(1)
              const dataType = this.state[`listings${typeToState}`]
              return <Listings type={match.params.type} data={dataType} />
            }}
          />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    )}
}

