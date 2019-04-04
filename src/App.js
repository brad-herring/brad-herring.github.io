import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize: '26px'}} to="/">Herschel Herring</Link>} scroll>
            <Navigation>
                {<Link style={{fontSize: '22px'}} to="/resume">Resume</Link>}
                {<Link style={{fontSize: '22px'}} to="/aboutme">About Me</Link>}
                {<Link style={{fontSize: '22px'}} to="/projects">Projects</Link>}
                {<Link style={{fontSize: '22px'}} to="/contact">Contact</Link>}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
