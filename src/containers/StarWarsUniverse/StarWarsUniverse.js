import React, { Component } from 'react';
import Planets from  './Planets/Planets';
import FullPlanet from  './FullPlanet/FullPlanet';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { Route, Redirect } from 'react-router-dom';

class StarWarsUniverse extends Component {
  state = {
    showPlanet: false,
    planeturl: ""
  }

  modalCloseHandler = () => {
      this.setState({showPlanet: false, planeturl: ""});
  }

  showPlanetInfo = (url) => {
     this.setState({showPlanet: true, planeturl: url});
  }

  render () {


    return (
      <div>
          <Modal show={this.state.showPlanet} modalClosed={this.modalCloseHandler}>
            <FullPlanet url={this.state.planeturl} closePlanetWindow={this.modalCloseHandler}/>
          </Modal>
          <Backdrop show={this.state.showPlanet} clicked={this.modalCloseHandler}/>


          <Route path={'/planets/:page'} render={(props) => <Planets {...props} showPlanetInfo={(url) => this.showPlanetInfo(url)}/>} />
          <Route exact path="/" render={() => <Redirect to="/planets/1"/>}/>

      </div>
    )
  }

}

export default StarWarsUniverse;
