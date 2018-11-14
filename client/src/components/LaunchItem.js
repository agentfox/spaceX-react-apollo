import React from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import {Link} from 'react-router-dom'

export default function LaunchItem({
    launch: { flight_number, mission_name, launch_date_utc, launch_success }
  }) {
  return (
    <div className="card card-body mb-3 text-left ">
        <div className="row">
            <div className="col-md-9">
                <h4 className="ml-4">Mission: <span className={launchStatus(launch_success,launch_date_utc)}>{mission_name}</span></h4>
                <p className="ml-4">Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_utc}</Moment></p>
            </div>
            <div className="col-md-3">
                <Link  to={`/launch/${flight_number}`} className="btn btn-secondary mt-3" >Launch Detail</Link>
            </div>
        </div>
    </div>
  )
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