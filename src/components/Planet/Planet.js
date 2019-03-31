import React from 'react';

import classes from './Planet.css';

const planet = (props) => (
    <article className={classes.PlantInList} onClick={props.clicked}>
        <h1>{props.name}</h1>
        <div className={classes.Info}>
                  <div className={classes.row}>
                    <label>Orbital period: </label>
                    <span>{props.orbital_period}</span>
                  </div>

                  <div className={classes.row}>
                    <label>Climate: </label>
                    <span>{props.climate}</span>
                  </div>
        </div>
    </article>
);

export default planet;
