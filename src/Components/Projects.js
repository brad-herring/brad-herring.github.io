import React, { Component } from 'react';
import {  Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  state = {
    activeTab : 0
  }
  render() {
    return(
      <div className="projects-body" style={{width: '100%', margin: 'auto'}}>
      <Grid className="projects-grid">
      <Cell col={12}>
      <div className="projects-cards">

        <Card className="ThermoSmart" shadow={5} style={{width: '22vw', height: '50vh', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/24/249/249632/thermometerflaticon-o.jpg?1416876475) center / cover'}}>ThermoSmart</CardTitle>
          <CardText style={{fontSize: '1.2vw'}}>
            A react app using API's to determine an optimal thermostat setting for your home.
          </CardText>
          <CardActions border>
          <Button style={{fontSize: '1.05vw'}} href="https://github.com/brad-herring/ThermoSmart"colored>GitHub</Button>
          <Button style={{fontSize: '1vw'}} href="https://brad-herring.github.io/ThermoSmart/"colored>Live Demo (UI Only)</Button>
        </CardActions>
        </Card>

      <Card className="Financial" shadow={5} style={{width: '22vw', height: '50vh', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(https://media.istockphoto.com/photos/technical-financial-graph-on-technology-abstract-background-picture-id673266772?k=6&m=673266772&s=612x612&w=0&h=RqHErFKhc22ol4nZKN9qlrQqFwI_G4EbbyHVX3oGC4g=) center / cover'}}>Financial Analyzer</CardTitle>
        <CardText style={{fontSize: '1.2vw'}}>
          A react web app that can be used to find the financial ratios of any publicly traded U.S. corporation.
        </CardText>
        <CardActions border>
        <Button style={{fontSize: '1.1vw'}} href="https://github.com/brad-herring/financial-ratio-app"colored>GitHub</Button>
        <Button style={{fontSize: '1.1vw'}} href="https://brad-herring.github.io/financial-ratio-app/"colored>Live Demo</Button>
      </CardActions>
      </Card>

      <Card className="Robot" shadow={5} style={{width: '22vw', height: '50vh', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(http://cdn.shopify.com/s/files/1/0615/2193/products/Arduino_Uno_grande.jpg?v=1495597642) center / cover'}}>Self-Driving Car</CardTitle>
        <CardText style={{fontSize: '1.2vw'}}>
          Website created with HTML, CSS, and jQuery documenting the process of building a self-driving car.
        </CardText>
        <CardActions border>
        <Button style={{fontSize: '1.1vw'}} href="https://github.com/brad-herring/self-driving-car"colored>GitHub</Button>
      </CardActions>
      </Card>

      </div>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Projects;
