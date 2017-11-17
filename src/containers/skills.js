import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//HOC
import Aux from '../hoc/aux';

//COMPONENTS
// import SkillTree from '../components/skilltree';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      display: ''
    };
    this.handleSkill = this.handleSkill.bind(this);
    this.handleGit = this.handleGit.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleSkill() {
    this.setState({selected: 'skills'})
      const skills =
        <Aux>
        <h3 className="text-center">Skill Tree:</h3>
        <div className="skill-set row">
          <div className="column-1">
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/java.png")} alt="Java" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/c++.png")} alt="C++" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/mysql.jpg")} alt="MySQL" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/git.png")} alt="Git" />
            </div>
          </div>

          <div className="column-2">
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/html.png")} alt="HTML" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/css.png")} alt="CSS" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/sass.png")} alt="Sass" />
            </div>
          </div>

          <div className="column-3">
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/js.jpg")} alt="JavaScript" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/react.png")} alt="React" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/redux.png")} alt="Redux" />
            </div>
          </div>

          <div className="column-4">
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/python.png")} alt="Python" />
            </div>
            <br />
            <div className="skill-box">
              <img className="skill-image" src={require("../css/images/django.png")} alt="Django" />
            </div>
          </div>

        </div>
        </Aux>
      this.setState({display: skills})
  }

  handleGit() {
    window.open('http://www.github.com/anthonychen1109','_blank')
  }

  handleHome() {
    let home =
    <Aux>
    <h5>ABOUT ME:</h5>
      <div className="card">
          <div className="card-block">
            Before transitioning into Software Engineering,
            I received a B.A. in Economics from Baruch College.
            The experience and knowledge was incredible. This experience
            gave me a new interest in the stock market.
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            During my time at Queens College studying Computer Science,
            I spent a little over a year and a half as an IT/MIS Administrator
            for Shine Electronics. This position gave a lot of hands on experience
            in the hardware side of computing along with Database knowledge.
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            After graduating from Queens College, I decided it was time to
            pursue my career as a Software Engineer. Python and React JS grabbed my
            attention in particular because of their beauty.
          </div>
        </div>
    </Aux>
    this.setState({display: home})
  }

  render() {
    return (
      <div className="row">
        <div className="display">
          { this.state.selected == null ?
            <div className="about">
              <h5>ABOUT ME:</h5>
                <div className="card">
                  <div className="card-block">
                    Before transitioning into Software Engineering,
                    I received a B.A. in Economics from Baruch College.
                    The experience and knowledge was incredible. This experience
                    gave me a new interest in the stock market.
                  </div>
                </div>

                <div className="card">
                  <div className="card-block">
                    During my time at Queens College studying Computer Science,
                    I spent a little over a year and a half as an IT/MIS Administrator
                    for Shine Electronics. This position gave a lot of hands on experience
                    in the hardware side of computing along with Database knowledge.
                  </div>
                </div>

                <div className="card">
                  <div className="card-block">
                    After graduating from Queens College, I decided it was time to
                    pursue my career as a Software Engineer. Python and React JS grabbed my
                    attention in particular because of their beauty.
                  </div>
                </div>
            </div> :
            <Aux>{this.state.display}</Aux>
          }
        </div>
        <div className="tab">
          <div className="home-tab"
            onClick={this.handleHome}
            >
            HOME
          </div>
          <div className="skill-tab"
            onClick={this.handleSkill}
            >
            SKILLS
          </div>
          <Link to='/resume'>
            <div className="resume-tab">
              RESUME
            </div>
          </Link>
          <div className="git-tab"
            onClick={this.handleGit}
            >
            GITHUB
          </div>
          <div className="proj-tab">PROJECTS</div>
        </div>
      </div>
    )
  }
}

export default Skills;