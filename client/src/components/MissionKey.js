import React from 'react';

export default function MissionKey() {
  return (
    <div className="my-3 d-flex justify-content-center ">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Success
      </p>
      
      <p>
        <span className="px-3 mx-2 bg-danger" /> = Fail 
      </p>
      <p>
        <span className="px-3 mx-2 bg-warning" /> = Not Yet Launched 
      </p>
    </div>
  );
}