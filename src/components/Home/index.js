import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardData: [], isLoader: true}

  componentDidMount() {
    this.getTeamCardDataFunc()
  }

  getTeamCardDataFunc = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const newTeamCardData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    // console.log(newTeamCardData)
    // console.log(data)
    this.setState({teamCardData: newTeamCardData, isLoader: false})
  }

  render() {
    const {teamCardData, isLoader} = this.state
    // console.log(teamCardData)
    return (
      <Link to="/">
        <div className="home-container">
          {isLoader ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div>
              <div className="logoContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logoImage"
                />
                <h1 className="heading1">IPL Dashboard</h1>
              </div>
              <div className="con">
                {teamCardData.map(eachCard => (
                  <TeamCard key={eachCard.id} eachTeamCard={eachCard} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
