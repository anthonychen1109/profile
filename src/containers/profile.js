import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str: 95,
      dex: 100,
      vit: 90,
      energy:85,
      pool: 250
    };
    this.handleStr = this.handleStr.bind(this);
    this.handleDex = this.handleDex.bind(this);
    this.handleVit = this.handleVit.bind(this);
    this.handleEnergy = this.handleEnergy.bind(this);
  }

  handleStr() {
    this.setState({ str: this.state.str+1 })
    this.setState({ pool: this.state.pool-1 })
  }

  handleDex() {
    this.setState({ dex: this.state.dex+1 })
    this.setState({ pool: this.state.pool-1 })
  }

  handleVit() {
    this.setState({ vit: this.state.vit+1 })
    this.setState({ pool: this.state.pool-1 })
  }

  handleEnergy() {
    this.setState({ energy: this.state.energy+1 })
    this.setState({ pool: this.state.pool-1 })
  }

  render() {
    return (
      <div className="container left-side">
          <div className="row">
            <div className="firstName">
              <h1>Anthony</h1>
            </div>
            <div className="lastName">
              <h1>Chen</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="level">
                <h6>Level</h6>
                <h6>99</h6>
              </div>
              <div className="experience">
                <h6>Experience</h6>
                <h6>42,000,000</h6>
              </div>
              <div className="nextLevel">
                <h6>Next Level</h6>
                <h6>42,000,000</h6>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="attr">
                <h6>STRENGTH</h6>
              </div>
              <div className="attr-value">
                <h6>{this.state.str}</h6>
              </div>
              <div className="attr-add"
                onClick={this.handleStr}
                >
                +
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="attr">
                <h6>DEXTERITY</h6>
              </div>
              <div className="attr-value">
                <h6>{this.state.dex}</h6>
              </div>
              <div className="attr-add"
                onClick={this.handleDex}
                >
                +
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="attr">
                <h6>VITALITY</h6>
              </div>
              <div className="attr-value">
                <h6>{this.state.vit}</h6>
              </div>
              <div className="attr-add"
                onClick={this.handleVit}
                >
                +
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="attr">
                <h6>ENERGY</h6>
              </div>
              <div className="attr-value">
                <h6>{this.state.energy}</h6>
              </div>
              <div className="attr-add"
                onClick={this.handleEnergy}
                >
                +
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="blank-left">
            <div className="row">
                <div className="attr resistance stat-points">
                  <h6>STAT POINTS REMAINING:</h6>
                </div>
                <div className="attr-value resistance-value stat-value">
                  <h6>{this.state.pool}</h6>
                </div>
              </div>
            </div>
            <div className="blank-right">
              <div className="row">
                <div className="attr resistance">
                  <h6>Fire Resistance</h6>
                </div>
                <div className="attr-value resistance-value">
                  <h6>100</h6>
                </div>
              </div>
              <div className="row">
                <div className="attr resistance">
                  <h6>Cold Resistance</h6>
                </div>
                <div className="attr-value resistance-value">
                  <h6>100</h6>
                </div>
              </div>
              <div className="row">
                <div className="attr resistance">
                  <h6>Lightning Resistance</h6>
                </div>
                <div className="attr-value resistance-value">
                  <h6>100</h6>
                </div>
              </div>
              <div className="row">
                <div className="attr resistance">
                  <h6>Poison Resistance</h6>
                </div>
                <div className="attr-value resistance-value">
                  <h6>100</h6>
                </div>
              </div>

            </div>
          </div>

      </div>
    )
  }
}

export default Profile;