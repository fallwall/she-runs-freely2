import React, { Component } from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioOne from './pages/PortfolioOne';
import Running from './pages/Running';
import Writing from './pages/Writing';
import WritingOne from './pages/WritingOne';
import ContactSocial from './components/ContactSocial';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" render={()=><Home />}/>
        <Route exact path="/about" render={()=><About />}/>
        <Route exact path="/codes" render={()=><Portfolio />}/>
        <Route exact path="/codesthis/:id" render={(props)=><PortfolioOne id={props.match.params.id}/>}/>
        <Route exact path="/runs" render={()=><Running />}/>
        <Route exact path="/writes" render={()=><Writing />}/>
        <Route exact path="/writesthis/:id" render={(props) => <WritingOne id={props.match.params.id}/>}/>
        <ContactSocial />
      </div>
    )
  }
}

