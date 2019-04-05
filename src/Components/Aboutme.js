import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {

  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={12}>
            <h1>About Me</h1>
            <hr/>
            <p>My name is Herschel Herring, I am a self taught programmer and
            web developer living in the Orlando, FL area.

            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
