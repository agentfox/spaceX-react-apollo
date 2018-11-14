import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
              <img className="logo" src="https://i.imgur.com/hzrRwO3.png" alt="logo"/>
              <Route exact path="/" component={Launches} />
              <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
