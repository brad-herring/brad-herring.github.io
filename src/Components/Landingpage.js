import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>



            <img src="http://www.newdesignfile.com/postpic/2011/02/male-business-avatar-icons_34179.png"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner">
              <h1>Herschel Herring</h1>

              <hr/>

              <h2>HTML | CSS | Bootstrap | JavaScript | jQuery | React</h2>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/herschel-herring-93a926181/" rel="LinkedIn" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                <a href="https://github.com/brad-herring" rel="GitHub" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                <a href="https://stackoverflow.com/users/11336059/brad-herring?tab=profile" rel="StackOverflow" target="_blank">
                  <i className="fa fa-stack-overflow" aria-hidden="true"/>
                </a>


              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;
