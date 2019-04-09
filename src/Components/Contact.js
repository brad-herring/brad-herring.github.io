import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
          <h1>Herschel Herring</h1>
          <img src="http://www.newdesignfile.com/postpic/2011/02/male-business-avatar-icons_34179.png"
          alt="avatar"
          className="avatar-img2"></img>
        </Cell>
        <Cell col={6}>
          <center><h2>Contact</h2>
          <hr/>
          </center>
          <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '2rem', color: 'white'}}>
              <i className="fa fa-phone-square" aria-hidden="true"/>
              (941) 465-0642
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '2rem', color: 'white'}}>
              <i className="fa fa-envelope" aria-hidden="true"/>
              hbradherring@aol.com
              </ListItemContent>
            </ListItem>
          </List>
          </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
