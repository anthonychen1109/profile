import React from 'react';

//CONTAINERS
import Skills from '../containers/skills';
import Profile from '../containers/profile';

//HOCS
import Aux from '../hoc/aux';

const top = () => {
  return (
    <div className="top">
    <div className="row">
    <div className="profile">
      <Profile />
    </div>
    <div className="skills">
      <Skills />
    </div>
    </div>
    </div>
  )
}

export default top;