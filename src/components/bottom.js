import React from 'react';

//HOCS
import Aux from '../hoc/aux';

const bottom = () => {
  return (
    <Aux>
      <div className="bottom row">
        <div className="orbs">
          <img className="orb-pic" src={require("../css/images/health-orb.gif")} alt="health" />
        </div>
            <div className="bot-bar">
              <div className="row">
                <div className="skill-pic">
                  <img className="skill-image" src={require("../css/images/react.png")} alt="React" />
                </div>
                  <div className="stamina">
                    <div className="stamina-bar black">
                    </div>
                    <div className="stamina-bar yellow">
                    </div>
                  </div>
                  <div className="potion">
                    <div className="row">
                      <div className="potion-slot">
                        <img className="skill-image" src={require("../css/images/full-rejuv.gif")} alt="potion" />
                      </div>
                      <div className="potion-slot">
                        <img className="skill-image" src={require("../css/images/full-rejuv.gif")} alt="potion" />
                      </div>
                      <div className="potion-slot">
                        <img className="skill-image" src={require("../css/images/full-rejuv.gif")} alt="potion" />
                      </div>
                      <div className="potion-slot">
                        <img className="skill-image" src={require("../css/images/full-rejuv.gif")} alt="potion" />
                      </div>
                    </div>
                  </div>
                <div className="skill-pic">
                  <img className="skill-image" src={require("../css/images/react.png")} alt="React" />
                </div>
              </div>
            </div>
        <div className="orbs">
          <img className="orb-pic" src={require("../css/images/mana-orb.gif")} alt="mana" />
        </div>
      </div>
    </Aux>
  )
}

export default bottom;