import React, { Component,Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Link} from 'react-router-dom'
import moment from 'moment';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number : Int!) {
    launch(flight_number : $flight_number) {
      flight_number
      mission_name
      launch_date_utc
      launch_success
      details
      rocket {
          rocket_id
          rocket_name
          rocket_type
      }
    }
  }
`;

export default class Launch extends Component {
  render() {
      let {flight_number} = this.props.match.params;
      flight_number = parseInt(flight_number);

      
    return (
      <Fragment>
        <Query  query={LAUNCH_QUERY} variables={{flight_number:flight_number}}>
            {
                ({loading,error,data}) => {
                    if (loading){ return <h4>Loading...</h4> }
                    if (error){ console.log(error);}
                    
                    return (
                        <Fragment >
                            <h3 className="card-title my-3 ">Mission Data</h3>
                            <div className="card w-75 mx-auto my-3 text-left" >
                                <div className="card-body ">
                                    <h5 className="card-title ">Mission Name: {data.launch.mission_name} 
                                        <i className={launchStatus(data.launch.launch_success,data.launch.launch_date_utc)}>
                                        {   
                                            status(data)
                                        }</i> 
                                    </h5>

                                    <p className="card-text ml-2">{data.launch.details}</p>
                                    
                                    <h5 className="card-title ">Launch Details</h5>
                                    <ul className="list-group">
                                    <li className="list-group-item">
                                        Flight Number: {data.launch.flight_number}
                                    </li>
                                    <li className="list-group-item">
                                        Launch Date: {data.launch.launch_date_utc}
                                    </li>
                                    
                                    </ul>
                                    <h4 className="my-3">Rocket Details</h4>
                                    <ul className="list-group">
                                    <li className="list-group-item">Rocket ID: {data.launch.rocket.rocket_id}</li>
                                    <li className="list-group-item">
                                        Rocket Name: {data.launch.rocket.rocket_name}
                                    </li>
                                    <li className="list-group-item">
                                        Rocket Type: {data.launch.rocket.rocket_type}
                                    </li>
                                    </ul>
                                    <hr />
                                    <Link to="/" className="btn btn-secondary">
                                    Back
                                    </Link>
                                    
                                </div>
                            </div>
                        </Fragment>
                    )
                }
            }
        </Query>
      </Fragment>
    )
  }
}

const launchStatus = (launch_success,launch_date_utc)=> {
    if(launch_success){ return "text-success"} 
    else
    {   
        let now = new Date();
        if(moment(launch_date_utc) > now) {
            return "text-warning"
        }
        else{
            return "text-danger"
        }
        
    }

}
const status= (data)=> {
                                             
        if(launchStatus(data.launch.launch_success,data.launch.launch_date_utc)==="text-success"){ return "<success>"}
        if(launchStatus(data.launch.launch_success,data.launch.launch_date_utc)==="text-danger") {return "<failed>"}
        if(launchStatus(data.launch.launch_success,data.launch.launch_date_utc)==="text-warning") {return "<upcoming>"}
        
}