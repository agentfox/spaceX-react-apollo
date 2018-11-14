import React, { Component,Fragment } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_utc
      launch_success
      details
    }
  }
`;
export default class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query  query={LAUNCHES_QUERY}>
            {
                ({loading,error,data})=> {
                    if(loading){ return <h4>Loading...</h4> }
                    if(error){ console.log(error);}
                    
                    return (
                            <div className="w-75 mx-auto">
                            {
                                data.launches.map(launch=> (
                                    <LaunchItem launch={launch} key={launch.flight_number} />
                                ))
                            }</div>
                        )
                }
            }
        </Query>
      </Fragment>
    )
  }
}
