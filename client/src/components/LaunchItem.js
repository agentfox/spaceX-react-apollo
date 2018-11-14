import React from 'react'

export default function LaunchItem({
    launch: { flight_number, mission_name, launch_date_utc, launch_success }
  }) {
  return (
    <div className="card card-body mb-3 text-left ">
        <div className="row">
            <div className="col-md-9">
                <h4 className="ml-4">Mission: <span className={launch_success? "text-success" : "text-danger"}>{mission_name}</span></h4>
                <p className="ml-4">Date: {launch_date_utc}</p>
            </div>
            <div className="col-md-3">
                <a name="" id="" class="btn btn-secondary mt-3" >Launch Detail</a>
            </div>
        </div>
    </div>
  )
}
