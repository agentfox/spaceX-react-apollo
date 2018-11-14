import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
            <img className="logo" src="https://i.imgur.com/hzrRwO3.png" alt="logo"/>
            <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
