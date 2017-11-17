import React from 'react';

import { Link } from 'react-router-dom';

const resume = () => {
  return (
    <div className="row">
    <div className="resume">
      <img src={require("../css/images/resume.png")} alt="Resume" />
    </div>
    <div>
      <Link to='/'>
        <button className="btn btn-secondary">BACK</button>
      </Link>
    </div>
    </div>
  )
}

export default resume;