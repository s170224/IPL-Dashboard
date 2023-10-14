import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <li className="li1">
      <div className="eachLatestContainer">
        <div className="winnigslatestContainer">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match  ${competingTeam}`}
          className="imageLogo3"
        />
        <div className="container4">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>{manOfTheMatch}</p>
          <p>{matchStatus}</p>
          <p>{competingTeam}</p>
          <p>{umpires}</p>
        </div>
      </div>
    </li>
  )
}
export default LatestMatch
