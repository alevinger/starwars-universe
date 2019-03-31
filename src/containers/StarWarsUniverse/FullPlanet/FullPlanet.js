import React, { Component } from 'react';
import classes from './FullPlanet.css';
import axios from 'axios';

class FullPlanet extends Component {
  state = {
      url: '',
      planet: {}
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData () {
    if(this.props.url && (this.state.url  !== this.props.url)) {
    axios.get(this.props.url)
    .then(response => {
      this.setState({
        url: this.props.url,
        planet: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
}

  render() {
    const planet = this.state.planet;

    return(this.state.url ?
    <div className={classes.Planet}>
      <header>
        {planet.name}
        <button onClick={this.props.closePlanetWindow}>X</button>
      </header>
      <div className={classes.row}>
        <label>Rotation period: </label>
        <span>{planet.rotation_period}</span>
      </div>
      <div className={classes.row}>
        <label>Orbital period: </label>
        <span>{planet.orbital_period}</span>
      </div>
      <div className={classes.row}>
        <label>Diameter: </label>
        <span>{planet.diameter}</span>
      </div>
      <div className={classes.row}>
        <label>Climate: </label>
        <span>{planet.climate}</span>
      </div>
      <div className={classes.row}>
        <label>Gravity: </label>
        <span>{planet.gravity}</span>
      </div>
      <div className={classes.row}>
        <label>Terrain: </label>
        <span>{planet.terrain}</span>
      </div>
      <div className={classes.row}>
        <label>Surface water: </label>
        <span>{planet.surface_water}</span>
      </div>
      <div className={classes.row}>
        <label>Population: </label>
        <span>{planet.population}</span>
      </div>
    </div> : <div>Loading... </div>
  )}
}

export default FullPlanet;
