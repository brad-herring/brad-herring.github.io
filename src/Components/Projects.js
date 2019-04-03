import React, { Component } from 'react';
import {  Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  state = {
    activeTab : 0
  }
  render() {
    return(
      <div className="projects-grid">

          <Card className="ThermoSmart" shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/24/249/249632/thermometerflaticon-o.jpg?1416876475) center / cover'}}>ThermoSmart</CardTitle>
          <CardText>
            A react app using API's to determine an optimal thermostat setting for your home.
          </CardText>
          <CardActions border>
          <Button href="https://github.com/brad-herring/ThermoSmart"colored>GitHub</Button>
        </CardActions>
        </Card>

      </div>
    )
  }
}

export default Projects;
