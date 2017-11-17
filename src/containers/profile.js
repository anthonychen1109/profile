import React, { Component } from 'react';

//HOC
import Aux from '../hoc/aux';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 100
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({ counter: this.state.counter+1})
  }

  render() {
    return (
      <div className="container">
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
                <h6>{this.state.counter}</h6>
              </div>
              <div className="attr-add"
                onClick={this.handleAdd}
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
                <h6>{this.state.counter}</h6>
              </div>
              <div className="attr-add">
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
                <h6>100</h6>
              </div>
              <div className="attr-add">
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
                <h6>100</h6>
              </div>
              <div className="attr-add">
                +
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="blank-left"></div>
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