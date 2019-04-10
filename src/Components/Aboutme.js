import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="about-grid">
          <Cell col={12}>

            <center><div className="about-banner">
            <h1>About Me</h1>
            <center><hr/></center>
            <p>My name is Herschel Herring, I am a self taught programmer and
            web developer living in the Orlando, FL area. I enjoy working on a variety
            of web-related projects using HTML, CSS, and JavaScript and have
            implemented libraries such as React, Node, jQuery, and Gatsby.
            </p>
            </div></center>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
