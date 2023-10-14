import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl1: '',
    isLoader: true,
  }

  componentDidMount() {
    this.getReamCardDetails()
  }

  getReamCardDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    const updatedDataTeamUrl = {
      teamBannerUrl: data.team_banner_url,
    }
    const updatedLatestMatchData = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const updatedRecentMatches = data.recent_matches.map(eachMatch1 => ({
      umpires: eachMatch1.umpires,
      result: eachMatch1.result,
      manOfTheMatch: eachMatch1.man_of_the_match,
      id: eachMatch1.id,
      date: eachMatch1.date,
      venue: eachMatch1.venue,
      competingTeam: eachMatch1.competing_team,
      competingTeamLogo: eachMatch1.competing_team_logo,
      firstInnings: eachMatch1.first_innings,
      secondInnings: eachMatch1.second_innings,
      matchStatus: eachMatch1.match_status,
    }))
    this.setState({
      latestMatchDetails: updatedLatestMatchData,
      recentMatches: updatedRecentMatches,
      teamBannerUrl1: updatedDataTeamUrl,
      isLoader: false,
    })
    // console.log(updatedRecentMatches)
    // console.log(updatedDataTeamUrl)
    // console.log(updatedLatestMatchData)
    // console.log(data)
  }

  render() {
    const {
      teamBannerUrl1,
      latestMatchDetails,
      recentMatches,
      isLoader,
    } = this.state
    console.log(teamBannerUrl1, latestMatchDetails, recentMatches)
    return (
      <div>
        {isLoader ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="main-con2">
            <img
              src={teamBannerUrl1.teamBannerUrl}
              alt="team banner"
              className="teamImage1"
            />
            <p className="para7">Latest Matches</p>
            <ul>
              <div className="latestCon1">
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              </div>
            </ul>
            <ul>
              <div className="matchCon">
                {recentMatches.map(eachRecentMatch => (
                  <MatchCard
                    key={eachRecentMatch.id}
                    recentMatch={eachRecentMatch}
                  />
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
