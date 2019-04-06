import React, { Component } from 'react';
import {  Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  state = {
    activeTab : 0
  }
  render() {
    return(
      <div className="projects-grid">

          <Card className="ThermoSmart" shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/24/249/249632/thermometerflaticon-o.jpg?1416876475) center / cover'}}>ThermoSmart</CardTitle>
          <CardText>
            A react app using API's to determine an optimal thermostat setting for your home.
          </CardText>
          <CardActions border>
          <Button href="https://github.com/brad-herring/ThermoSmart"colored>GitHub</Button>
          <Button href="https://brad-herring.github.io/ThermoSmart/"colored>Live Demo (UI Only)</Button>
        </CardActions>
        </Card>

        <Card className="Robot" shadow={5} style={{width: '350px', height: '350px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(http://cdn.shopify.com/s/files/1/0615/2193/products/Arduino_Uno_grande.jpg?v=1495597642) center / cover'}}>Self-Driving Car</CardTitle>
        <CardText>
          Website created with HTML, CSS, and jQuery documenting the process of building a self-driving car.
        </CardText>
        <CardActions border>
        <Button href="https://github.com/brad-herring/self-driving-car"colored>GitHub</Button>
      </CardActions>
      </Card>

      </div>
    )
  }
}

export default Projects;
