import React, {Component} from 'react';

import axios from 'axios';
import Planet from '../../../components/Planet/Planet';
import Pagination from '../../../components/UI/Pagination/Pagination';
import classes from './Planets.css';


class Planets extends Component {
  state = {
    totalCount: 0,
    totalPages: 0,
    page: 1,
    planets: [],
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData () {
    if(this.props.match.params.page && (this.state.page !== this.props.match.params.page)) {
      axios.get('https://swapi.co/api/planets/?page='+this.props.match.params.page)
      .then(response => {
        this.setState({
          totalCount: response.data.count,
          totalPages: Math.ceil(response.data.count/10),
          planets: response.data.results,
          page: this.props.match.params.page
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
}

  render() {
      let planets = '';
      planets = this.state.planets.map(planet => {
       return (
           <Planet
           key={planet.name}
           name={planet.name}
           orbital_period={planet.orbital_period}
           climate={planet.climate}
           clicked={() => this.props.showPlanetInfo(planet.url)}/>
       )
     })

    return(this.state.totalCount ?
          <div className={classes.Planets}>
            {planets}
            <Pagination page={this.state.page} total={this.state.totalPages} />
          </div> : <div>Loading...</div>
        )

  }
}
export default Planets;
